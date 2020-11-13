import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import Topbar from 'components/Topbar'
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import Image from 'components/Image'
import BookCard from 'components/BookCard'
import Footer from 'components/Footer'
import ShowBook from 'components/ShowBook'

import { getCategories, getBooks, filterBooksByCategory, searchBook } from 'services/books'

import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from 'helpers/constants'

import landingImage from 'images/landing-image.png'

import t from 'lang'

const Home = () => {
  const defaultCategories = { rows: [{ id: 0, name: 'All' }] }

  const [currentCategoryId, setCurrentCategoryId] = useState(-1)
  const [clickedBookId, clickedBookIdState] = useState(-1)
  const [toggleNavbarOpen, setToggleNavbarOpen] = useState(false)
  const [bookCategories, setBookCategories] = useState(defaultCategories)
  const [currentBooks, setCurrentBooks] = useState([])

  const setClickedBookId = id => {
    if (id !== -1) {
      setCurrentCategoryId(-1)
    }
    clickedBookIdState(id)
  }

  const searchFetch = async value => {
    try {
      const response = await searchBook(value)
      setClickedBookId(-1)
      setCurrentBooks(response?.data?.rows)
    } catch {
      toast.error(t('searchNotPossible'), { className: 'toast' })
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories()
        if (response?.data?.rows.length) {
          defaultCategories.rows.push(...response?.data?.rows)
        }

        setBookCategories(defaultCategories)
        setCurrentCategoryId(0)
      } catch {
        toast.error(`${t('serverError')} (Err: CORS Headers API)`, {
          className: 'toast'
        })
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (currentCategoryId === 0) {
      const fetchAllBooks = async () => {
        try {
          const response = await getBooks()
          setCurrentBooks(response?.data?.rows)
          setClickedBookId(-1)
        } catch {
          toast.error(t('cantResolveBookList'), { className: 'toast' })
        }
      }
      fetchAllBooks()
    } else if (currentCategoryId !== -1) {
      const fetchBooksFromCategory = async () => {
        try {
          const response = await filterBooksByCategory(currentCategoryId)
          setCurrentBooks(response?.data?.rows)
          setClickedBookId(-1)
        } catch {
          toast.error(t('cantResolveBookListByCategoty'), { className: 'toast' })
        }
      }
      fetchBooksFromCategory()
    }
  }, [currentCategoryId])

  return (
    <>
      <Topbar
        searchFetch={searchFetch}
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={setCurrentCategoryId}
        toggleNavbarOpen={toggleNavbarOpen}
        setToggleNavbarOpen={setToggleNavbarOpen}
      />
      {clickedBookId === -1 && (
        <StyledContainer>
          <StyledImage className='loader-landing-image' src={landingImage} alt='Landing Image' />
        </StyledContainer>
      )}

      <MainContainer>
        <Navbar
          toggleNavbarOpen={toggleNavbarOpen}
          navbarData={bookCategories}
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={setCurrentCategoryId}
        />

        {clickedBookId === -1 ? (
          <CardsContainer>
            {currentBooks.map(item => (
              <BookCard key={item?.id} click={setClickedBookId} cardData={item} />
            ))}
          </CardsContainer>
        ) : (
          <ShowBook bookId={clickedBookId} />
        )}
      </MainContainer>

      <StyledContainer>
        <Footer reduceMarginTop={clickedBookId === -1} />
      </StyledContainer>
    </>
  )
}

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  margin-top: 0px;
  flex-direction: row;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 150px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 62vw;
  margin-top: calc(115px + ${({ theme }) => theme?.space[6]}px);

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 52vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 115px;
    height: 57vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
    height: 50vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 500}px) {
    height: auto;
  }
`

const StyledContainer = styled(Container)`
  padding: 0;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[3]}vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[11]}px;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
    padding: 0 ${({ theme }) => theme?.space[13]}px;
  }
`

const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme?.space[4]}px;
  padding: 0 ${({ theme }) => theme?.space[4]}px;
  z-index: 2;
  height: fit-content;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme?.space[2]}vw;
    padding: 0 ${({ theme }) => theme?.space[3]}vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-left: -60px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme?.space[10]}px;
    padding: 0 ${({ theme }) => theme?.space[11]}px 0 0;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
    padding: 0 ${({ theme }) => theme?.space[13]}px 0 0;
  }
`

export default Home
