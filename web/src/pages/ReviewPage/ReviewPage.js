import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ReviewPage = () => {
  return (
    <>
      <MetaTags title="Review" description="Review page" />

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-10 lg:pt-10 lg:pb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
                Review
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                Drag-and-drop your choices next to the confidence level you have
                for each category. 24 is the highest confidence and 1 is the
                lowest confidence. Get a category right and you will be awarded
                the points.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-8 px-5">
        <p>
          My default route is named <code>review</code>, link to me with `
          <Link to={routes.review()}>Review</Link>`
        </p>
      </div>
    </>
  )
}

export default ReviewPage
