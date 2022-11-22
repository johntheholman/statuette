import {
  InformationCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'

import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const people = [
  {
    name: 'Belfast',
    title: 'Feature',
    nominations: '6 nominations',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/belfast.jpg',
  },
  {
    name: 'CODA',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/coda.jpg',
  },
  {
    name: `Don't Look Up`,
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/dontLookUp.jpg',
  },
  {
    name: 'Drive My Car',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/driveMyCar.jpg',
  },
  {
    name: 'Dune',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/dune.jpg',
  },
  {
    name: 'King Richard',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/kingRichard.jpg',
  },
  {
    name: 'Licorice Pizza',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/licoricePizza.jpg',
  },
  {
    name: 'Nightmare Alley',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/nightmareAlley.jpg',
  },
  {
    name: 'The Power of the Dog',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/thePowerOfTheDog.jpg',
  },
  {
    name: 'West Side Story',
    title: 'Feature',
    nominations: 'Admin',
    nominate: 'janecooper@example.com',
    details: '+1-202-555-0170',
    imageUrl: 'images/westSideStory.jpg',
  },
]

const NomineesPage = () => {
  return (
    <>
      <MetaTags title="Nominees" description="Nominees page" />

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-10 lg:pt-10 lg:pb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
                Nominees
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                Explore each film or individual to see what else they have done
                that may help inform how you select your nominee. You can even
                nominate them straight from the individuals or films screen in
                multiple categories.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-8 px-5">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person) => (
            <li
              key={person.nominate}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{person.title}</dd>
                  <dt className="sr-only">Nominations</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {person.nominations}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <Link
                      to={`mailto:${person.nominate}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <PlusCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Nominate</span>
                    </Link>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <Link
                      to={`tel:${person.details}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <InformationCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NomineesPage
