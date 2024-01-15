import Header from './Header'
import Content from './Content'
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Course = ({course}) => {
  return (
    <>
    <Header text={course.name}/>
    <Content parts={course.parts}/>
    </>
  )
}

export default Course