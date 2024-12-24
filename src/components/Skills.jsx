import React from 'react'
import "./skills.css"
import Skill from './Skill'
function Skills() {
  const myskills=["HTML","CSS","TailwindCSS","JavaScript","React","Git","vitest"]
  return (
    <div>
      <ul className='flex flex-wrap gap-4 justify-center'>
        {myskills.map((e)=><Skill key={e} skill={e}/>)}
      </ul>
    </div>
  )
}

export default Skills
