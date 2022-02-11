import React from 'react'
import styled from 'styled-components'

function CircularProgress() {
  return (
    <CircProgress className='loader-2 center'><span></span></CircProgress>
  )
}

export default CircularProgress

const CircProgress = styled.div`
  .center {
  	display: block;
  	position: absolute;
  	top: 0; 
    left: 0;
  	bottom: 0;
    right: 0;
  	margin: auto;
  }

  .loader-2 {
    display: block;
  	height: 32px;
  	width: 32px;
  	-webkit-animation: loader-2-1 3s linear infinite;
  	        animation: loader-2-1 3s linear infinite;
  }
  @-webkit-keyframes loader-2-1 {
  	0%   { -webkit-transform: rotate(0deg); }
  	100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes loader-2-1 {
  	0%   { transform: rotate(0deg); }
  	100% { transform: rotate(360deg); }
  }
  .loader-2 span {
  	display: block;
  	position: absolute;
  	top: 0; left: 0;
  	bottom: 0; right: 0;
  	margin: auto;
  	height: 32px;
  	width: 32px;
  	clip: rect(16px, 32px, 32px, 0);
  	-webkit-animation: loader-2-2 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  	        animation: loader-2-2 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }
  @-webkit-keyframes loader-2-2 {
  	0%   { -webkit-transform: rotate(0deg); }
  	100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes loader-2-2 {
  	0%   { transform: rotate(0deg); }
  	100% { transform: rotate(360deg); }
  }
  .loader-2 span::before {
  	content: "";
  	display: block;
  	position: absolute;
  	top: 0; left: 0;
  	bottom: 0; right: 0;
  	margin: auto;
  	height: 32px;
  	width: 32px;
  	border: 3px solid transparent;
  	border-top: 3px solid #FFF;
  	border-radius: 50%;
  	-webkit-animation: loader-2-3 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  	        animation: loader-2-3 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }
  @-webkit-keyframes loader-2-3 {
  	0%   { -webkit-transform: rotate(0deg); }
  	100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes loader-2-3 {
  	0%   { transform: rotate(0deg); }
  	100% { transform: rotate(360deg); }
  }
  .loader-2 span::after {
  	content: "";
  	display: block;
  	position: absolute;
  	top: 0; left: 0;
  	bottom: 0; right: 0;
  	margin: auto;
  	height: 32px;
  	width: 32px;
  	border: 3px solid rgba(255, 255, 255, .5);
  	border-radius: 50%;
  }
`