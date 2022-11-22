import {
  PlayCircleIcon,
  PaperClipIcon,
  PlusCircleIcon,
} from '@heroicons/react/20/solid'
import {
  CheckIcon,
  ComputerDesktopIcon,
  FilmIcon,
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  MegaphoneIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  PencilIcon,
  PencilSquareIcon,
  ScissorsIcon,
  ShoppingBagIcon,
  SparklesIcon,
  SwatchIcon,
  TrophyIcon,
  UserIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const nominee = {
  belfast: {
    name: 'Belfast',
    role: 'Laura Berwick, Kenneth Branagh, Becca Kovacik and Tamar Thomas, Producers',
    imageUrl: '/images/belfast.jpg',
    backgroundImage:
      'https://www.themoviedb.org/t/p/original/4KLlHifB1kgMtWl3YnY8JinOj65.jpg',
    synopsis:
      'Buddy is a young boy on the cusp of adolescence, whose life is filled with familial love, childhood hijinks, and a blossoming romance. Yet, with his beloved hometown caught up in increasing turmoil, his family faces a momentous choice: hope the conflict will pass or leave everything they know behind for a new life.',
    href: '/nominee/belfast',
    nominate: '',
    stats: [
      {
        displayName: 'Nominations',
        stat: '7',
      },
      {
        displayName: 'Rating',
        stat: 'PG-13',
      },
      {
        displayName: 'Runtime',
        stat: '1h 38m',
      },
    ],
    releaseDate: '2021-11-12',
    mpaRating: 'PG-13',
    runtime: '1h 38m',
    boxoffice: '$49,225,145',
    origin: 'United Kingdom',
    language: 'English',
    director: 'Kenneth Branagh',
    genres: [],
    tmdb: '777270',
    trailer: 'https://www.youtube.com/watch?v=Ja3PPOnJQ2k',
    currentYearNominations: '7',
    nominationCategories: [
      {
        title: 'Actor in a Supporting Role',
        href: '/category/actor-in-a-supporting-role',
        icon: UsersIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
      },
      {
        title: 'Actress in a Supporting Role',
        description:
          'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
        href: '/category/actress-in-a-supporting-role',
        icon: UsersIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
      },
      {
        title: 'Best Picture',
        href: '/category/best-picture',
        icon: TrophyIcon,
        iconForeground: 'text-red-700',
        iconBackground: 'bg-red-50',
      },
      {
        title: 'Directing',
        description:
          'Awarded to the director who has shown outstanding achievement in creating a singular vision of a particular film.',
        href: '/category/directing',
        icon: MegaphoneIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
      },
      {
        title: 'Music (Original Song)',
        description:
          'Awarded to the music composer and lyricists that compose an original song specifically for a given motion picture.',
        href: '/category/music-original-song',
        icon: MusicalNoteIcon,
        iconForeground: 'text-red-700',
        iconBackground: 'bg-red-50',
      },
      {
        title: 'Sound',
        description:
          'Awarded to the sound engineers that create the actual sounds that you hear when something explodes or when you hear the footsteps of an actor/actress. Awarded the sound mixers and engineers that are able to add all of the sound effects, dialogue, and music together without making one aspect too noticable.',
        href: '/category/sound',
        icon: MicrophoneIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
      },
      {
        title: 'Writing (Original Screenplay)',
        href: '/category/writing-original-screenplay',
        icon: PencilIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
      },
    ],
  },
}

const displayDate = (date) => {
  const options = { month: 'long' }
  const dateObj = new Date(date)
  const monthShort = new Intl.DateTimeFormat('en-US', options).format()
  const day = dateObj.getDay()
  const year = dateObj.getFullYear()
  return `${monthShort} ${day}, ${year}`
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NomineePage = ({ title }) => {
  const entity = nominee[title]
  return (
    <>
      <MetaTags title="Nominee" description="Nominee page" />

      <div className="relative overflow-hidden">
        <div className="pt-6 sm:pt-5 lg:pt-10">
          <img
            className="h-40 w-full object-cover sm:h-60 lg:h-96"
            src={entity.backgroundImage}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="aspect-w-3 aspect-h-2 w-1/4 rounded-lg"
                src={entity.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 flex-1 sm:hidden md:block">
                <h1 className="truncate text-4xl font-bold text-red-500">
                  {entity.name}
                </h1>
              </div>
              <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href={entity.trailer}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="inline-flex justify-center rounded-md border border-yellow-700 bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  <PlayCircleIcon
                    className="-ml-1 mr-2 h-5 w-5 text-yellow-700"
                    aria-hidden="true"
                  />
                  <span>Trailer</span>
                </a>

                <Link
                  to={entity.nominate}
                  className="inline-flex justify-center rounded-md border border-yellow-700 bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  <PlusCircleIcon
                    className="-ml-1 mr-2 h-5 w-5 text-yellow-700"
                    aria-hidden="true"
                  />
                  <span>Nominate</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-4xl font-bold text-gray-900">
              {entity.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gray-100 py-6">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {entity.stats.map((item) => (
              <div
                key={item.displayName}
                className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-sm font-medium text-red-500">
                  {item.displayName}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-yellow-500">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative overflow-hidden">
          <div className="pt-6 sm:pt-5 lg:pt-10"></div>
          <div className="mx-auto mt-5 border-t border-gray-200 px-4 pt-6 sm:px-6 sm:pt-5 lg:px-8 lg:pt-10">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">
                  Release date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {displayDate(entity.releaseDate)}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Director</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {entity.director}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">
                  Country of origin
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {entity.origin}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Language</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {entity.language}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">
                  Box Office
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {entity.boxoffice}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Synopsis</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {entity.synopsis}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">
                  Categories
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    {entity.nominationCategories.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <item.icon
                            className={classNames(
                              item.iconForeground,
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            <Link to={item.href} className="">
                              {item.title}
                            </Link>
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <Link
                            to="#"
                            className="font-medium text-yellow-600 hover:text-yellow-500"
                          >
                            Nominate
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default NomineePage
