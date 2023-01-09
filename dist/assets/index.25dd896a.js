import{r as s,M as d,j as e,aA as f,aD as S,T as h,aB as C,aC as x,cr as A,o as n,k as j,cj as y,ae as v,af as i}from"./index.b8b13c58.js";import{C as l}from"./index.9b59a91a.js";import{B as T}from"./index.4c823db6.js";import{bi as a}from"./App.e1b9a34b.js";const L=()=>{const[t,o]=s.exports.useState([]);return s.exports.useEffect(()=>{d.get("/api/autocomplete/data").then(r=>o(r.data.autoComplete))},[]),t.length?e(a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},H=()=>{const[t]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return e(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",suggestions:t,className:"form-control"})},N=()=>{const[t]=s.exports.useState([{name:"Jake Shelton",img:f},{name:"Edith Baldwin",img:S},{name:"Jennifer Wolfe",img:h},{name:"Emily Washington",img:C},{name:"Heather Green",img:x},{name:"Brian Moore",img:A}]);return e(a,{filterKey:"name",placeholder:"Type 'a'",className:"form-control",suggestions:t,customRender:(o,r,m,c,g,u)=>n("li",{onMouseEnter:()=>u(m.indexOf(o)),className:j("suggestion-item",{active:m.indexOf(o)===c}),onClick:p=>{g(null,p)},children:[e("img",{src:o.img,alt:o.name,height:"32",width:"32",className:"me-1"}),e("span",{children:o.name})]},r)})},R=()=>{const[t]=s.exports.useState([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]);return e(a,{grouped:!0,filterKey:"title",placeholder:"Type 'c'",className:"form-control",suggestions:t,filterHeaderKey:"groupTitle"})},P=()=>{const[t]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return e(a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},E=()=>{const[t]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return e(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",className:"form-control",suggestions:t,defaultSuggestions:!0})},J=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteBasic = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteBasic
`})}),K=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSections = () => {
  const [suggestions] = useState([
    {
      groupTitle: '1970s',
      data: [
        {
          title: 'C'
        }
      ]
    },
    {
      groupTitle: '1980s',
      data: [
        {
          title: 'C++'
        },
        {
          title: 'Perl'
        }
      ]
    },
    {
      groupTitle: '1990s',
      data: [
        {
          title: 'Haskell'
        },
        {
          title: 'Python'
        },
        {
          title: 'Java'
        },
        {
          title: 'Javascript'
        },
        {
          title: 'PHP'
        },
        {
          title: 'Ruby'
        }
      ]
    },
    {
      groupTitle: '2000s',
      data: [
        {
          title: 'C#'
        },
        {
          title: 'Scala'
        },
        {
          title: 'Clojure'
        },
        {
          title: 'Go'
        }
      ]
    },
    {
      groupTitle: '2010s',
      data: [
        {
          title: 'Elm'
        }
      ]
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      filterHeaderKey='groupTitle'
      grouped={true}
      placeholder="Type 'c'"
    />
  )
}
export default AutoCompleteSections
`})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AutoComplete from '@components/autocomplete'

const AutoCompleteAjax = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios
      .get('/api/autocomplete/data')
      .then(response => setSuggestions(response.data.autoComplete))
  }, [])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder='Search for any of the top 250 IMDB movies'
    />
  )
}
export default AutoCompleteAjax
`})}),M=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import classnames from 'classnames'
import AutoComplete from '@components/autocomplete'
import img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'

const AutoCompleteRender = () => {
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img2
    },
    {
      name: 'Jennifer Wolfe',
      img: img3
    },
    {
      name: 'Emily Washington',
      img: img4
    },
    {
      name: 'Heather Green',
      img: img6
    },
    {
      name: 'Brian Moore',
      img: img5
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='name'
      placeholder="Type 'a'"
      customRender={(
        suggestion,
        i,
        filteredData,
        activeSuggestion,
        onSuggestionItemClick,
        onSuggestionItemHover
      ) => (
        <li
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          key={i}
          onMouseEnter={() =>
            onSuggestionItemHover(filteredData.indexOf(suggestion))
          }
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img
            src={suggestion.img}
            alt={suggestion.name}
            height='32'
            width='32'
            className='me-1'
          />
          <span>{suggestion.name}</span>
        </li>
      )}
    />
  )
}
export default AutoCompleteRender
`})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteDefaultSuggestions = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      defaultSuggestions={true}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteDefaultSuggestions
`})}),D=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSearchLimit = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={2}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteSearchLimit
`})}),G=()=>(s.exports.useEffect(()=>{y.highlightAll()},[]),n(s.exports.Fragment,{children:[e(T,{title:"Auto Complete",data:[{title:"Components"},{title:"Auto Complete"}]}),n(v,{children:[e(i,{xl:"6",lg:"12",children:e(l,{title:"Basic",code:J,children:e(H,{})})}),e(i,{xl:"6",lg:"12",children:e(l,{title:"Sections",code:K,children:e(R,{})})}),e(i,{xl:"6",lg:"12",children:e(l,{title:"Ajax",code:B,children:e(L,{})})}),e(i,{xl:"6",lg:"12",children:e(l,{title:"Custom Render",code:M,children:e(N,{})})}),e(i,{xl:"6",lg:"12",children:e(l,{title:"Default Suggestions",code:k,children:e(E,{})})}),e(i,{xl:"6",lg:"12",children:e(l,{title:"Search Limit",code:D,children:e(P,{})})})]})]}));export{G as default};
