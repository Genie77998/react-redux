import React from 'react'
import reduxer from './redux'
import { createStore } from 'redux';

export const store = createStore(reduxer)

