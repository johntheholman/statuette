import {
  TagIcon,
  UserPlusIcon,
  CheckIcon,
  TvIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const posters = [
  {
    title: 'CODA',
    source: 'images/coda.jpg',
    altTag: 'CODA poster',
  },
  {
    title: 'Belfast',
    source: 'images/belfast.jpg',
    altTag: 'Belfast poster',
  },
  {
    title: `Don't Look Up`,
    source: 'images/dontLookUp.jpg',
    altTag: `Don't Look Up poster`,
  },
  {
    title: 'Drive My Car',
    source: 'images/driveMyCar.jpg',
    altTag: 'Drive My Car poster',
  },
  {
    title: 'Dune',
    source: 'images/dune.jpg',
    altTag: 'Dune poster',
  },
  {
    title: 'King Richard',
    source: 'images/kingRichard.jpg',
    altTag: 'King Richard poster',
  },
  {
    title: 'Licorice Pizza',
    source: 'images/licoricePizza.jpg',
    altTag: 'Licorice Pizza poster',
  },
]

const features = [
  {
    name: 'Go through each category',
    description:
      'You will have the opportunity to go through all 24 categories to study all of the nominees. You will see the nominees and other relavant informaiton to help you make your decision.',
    icon: TagIcon,
  },
  {
    name: 'Select a nominee',
    description:
      'Once you have gathered all the information, select a nominee for each category by clicking on the Nominate button on one of the cards.',
    icon: UserPlusIcon,
  },
  {
    name: 'Review your picks',
    description:
      'Once you have made a selection for each category, you will be able to review all of your picks by category before submitting them. Add a vote of confidence to each entry.',
    icon: CheckIcon,
  },
  {
    name: 'Watch live to see if you win',
    description:
      'Watch live on Oscar Sunday to see how well you did. When you win a particular category, your score is based on the confidence level you selected on the review page. Score the most points to win.',
    icon: TvIcon,
  },
]

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="bg-white">
        <header className="relative overflow-hidden">
          {/* Hero section */}
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-yellow-400 sm:text-6xl">
                  The Oscars are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that does not care if you live or
                  die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src={posters[0].source}
                              alt={posters[0].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[1].source}
                              alt={posters[1].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[2].source}
                              alt={posters[2].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[3].source}
                              alt={posters[3].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[4].source}
                              alt={posters[4].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[5].source}
                              alt={posters[5].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={posters[6].source}
                              alt={posters[6].altTag}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/category/actor-in-a-leading-role"
                    className="inline-block rounded-md border border-transparent bg-red-500 py-3 px-8 text-center font-medium text-white hover:bg-red-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main id="how-to-play">
          {/* How to Play Section */}
          <div className="bg-yellow-400 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold uppercase leading-8 text-red-500">
                  How to Play
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Just one pick at a time
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700">
                  See how confident you are in your picks for the Academy Awards
                  by guessing the winner in each category. The person who scores
                  the most points wins.
                </p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">
                          {feature.name}
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-red-500">Ready to dive in?</span>
                <span className="block">Start making your picks today.</span>
              </h2>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/category/actor-in-a-leading-role"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
                  >
                    Get started
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link
                    to={routes.rules()}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-red-700 hover:bg-red-200"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
