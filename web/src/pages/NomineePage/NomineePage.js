import { MetaTags } from '@redwoodjs/web'

const NomineePage = ({ title }) => {
  return (
    <>
      <MetaTags title="Nominee" description="Nominee page" />

      <h1>{title}</h1>
      <p>
        Find me in <code>./web/src/pages/NomineePage/NomineePage.js</code>
      </p>
    </>
  )
}

export default NomineePage
