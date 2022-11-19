import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RulesPage = () => {
  return (
    <>
      <MetaTags title="Rules" description="Rules page" />

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-10 lg:pt-10 lg:pb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
                Rules
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                In this game, you will select the nominee who you think will win
                in their specific category. After making your selections for
                each and every category there is one more thing, you will select
                a confidence level for each category. This confidence level will
                determine how many points you are awarded for selecting the
                correct winner in that category. Good luck! And remember to
                watch live on Oscar Sunday to see how well you did.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-8 px-5">
        <p>
          My default route is named <code>rules</code>, link to me with `
          <Link to={routes.rules()}>Rules</Link>`
        </p>
      </div>
    </>
  )
}

export default RulesPage
