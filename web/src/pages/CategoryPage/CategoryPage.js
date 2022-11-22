import {
  InformationCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'

import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const nominations = {
  'actor-in-a-leading-role': {
    title: 'Actor in a Leading Role',
    description:
      'Awarded to acknowledge the caliber of an actor who has delivered an outstanding performance as the lead character in a film.',
    nominees: [],
    nextHref: '/category/actor-in-a-supporting-role',
    previousHref: '',
  },
  'actor-in-a-supporting-role': {
    title: 'Actor in a Supporting Role',
    description:
      'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
    nominees: [],
    nextHref: '/category/actress-in-a-leading-role',
    previousHref: '/category/actor-in-a-leading-role',
  },
  'actress-in-a-leading-role': {
    title: 'Actress in a Leading Role',
    description:
      'Awarded to acknowledge the caliber of an actress who has delivered an outstanding performance as the lead character in a film.',
    nominees: [],
    nextHref: '/category/actress-in-a-supporting-role',
    previousHref: '/category/actor-in-a-supporting-role',
  },
  'actress-in-a-supporting-role': {
    title: 'Actress in a Supporting Role',
    description:
      'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
    nominees: [],
    nextHref: '/category/animated-feature-film',
    previousHref: '/category/actress-in-a-leading-role',
  },
  'animated-feature-film': {
    title: 'Animated Feature Film',
    description:
      'Awarded for the best collaborative efforts of an animated feature film between the producer(s), director(s), actor(s), writer(s), animator(s) and lots of other artists.',
    nominees: [],
    nextHref: '/category/best-picture',
    previousHref: '/category/actress-in-a-supporting-role',
  },
  'best-picture': {
    title: 'Best Picture',
    description:
      'Awarded to the producers, the Best Picture statuette is awarded for the best collaborative efforts of the producer(s), director(s), actor(s), writer(s) and lots of other artists.',
    nominees: [
      {
        name: 'Belfast',
        role: 'Laura Berwick, Kenneth Branagh, Becca Kovacik and Tamar Thomas, Producers',
        imageUrl: '/images/belfast.jpg',
        synopsis:
          'Buddy is a young boy on the cusp of adolescence, whose life is filled with familial love, childhood hijinks, and a blossoming romance. Yet, with his beloved hometown caught up in increasing turmoil, his family faces a momentous choice: hope the conflict will pass or leave everything they know behind for a new life.',
        href: '/nominee/belfast',
        nominate: '',
        releaseDate: '2021-11-12',
        mpaRating: 'PG-13',
        runtime: '1h 38m',
        tmdb: '777270',
      },
      {
        name: 'CODA',
        role: 'Philippe Rousselet, Fabrice Gianfermi and Patrick Wachsberger, Producers',
        imageUrl: '/images/coda.jpg',
        synopsis: `As a CODA (Child of Deaf Adults), Ruby is the only hearing person in her deaf family. When the family's fishing business is threatened, Ruby finds herself torn between pursuing her love of music and her fear of abandoning her parents.`,
        href: '/nominee/coda',
        nominate: '',
        releaseDate: '2021-08-11',
        mpaRating: 'PG-13',
        runtime: '1h 52m',
        tmdb: '776503',
      },
      {
        name: `Don't Look Up`,
        role: 'Adam McKay and Kevin Messick, Producers',
        imageUrl: '/images/dontLookUp.jpg',
        synopsis:
          'Two American astronomers attempt to warn humankind about an approaching comet that will wipe out life on planet Earth.',
        href: '/nominee/dont-look-up',
        nominate: '',
        releaseDate: '2021-12-08',
        mpaRating: 'R',
        runtime: '2h 18m',
        tmdb: '646380',
      },
      {
        name: 'Drive My Car',
        role: 'Teruhisa Yamamoto, Producer',
        imageUrl: '/images/driveMyCar.jpg',
        synopsis:
          'Yusuke Kafuku, a stage actor and director, still unable, after two years, to cope with the loss of his beloved wife, accepts to direct Uncle Vanya at a theater festival in Hiroshima. There he meets Misaki, an introverted young woman, appointed to drive his car. In between rides, secrets from the past and heartfelt confessions will be unveiled.',
        href: '/nominee/drive-my-car',
        nominate: '',
        releaseDate: '2021-11-24',
        mpaRating: 'NR',
        runtime: '2h 59m',
        tmdb: '758866',
      },
      {
        name: 'Dune',
        role: 'Mary Parent, Denis Villeneuve and Cale Boyter, Producers',
        imageUrl: '/images/dune.jpg',
        synopsis: `Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.`,
        href: '/nominee/dune',
        nominate: '',
        releaseDate: '2021-10-22',
        mpaRating: 'PG-13',
        runtime: '2h 35m',
        tmdb: '438631',
      },
      {
        name: 'King Richard',
        role: 'Tim White, Trevor White and Will Smith, Producers',
        imageUrl: '/images/kingRichard.jpg',
        synopsis:
          'The story of how Richard Williams served as a coach to his daughters Venus and Serena, who will soon become two of the most legendary tennis players in history.',
        href: '/nominee/king-richard',
        nominate: '',
        releaseDate: '2021-11-19',
        mpaRating: 'PG-13',
        runtime: '2h 25m',
        tmdb: '614917',
      },
      {
        name: 'Licorice Pizza',
        role: 'Sara Murphy, Adam Somner and Paul Thomas Anderson, Producers',
        imageUrl: '/images/licoricePizza.jpg',
        synopsis:
          'The story of Alana Kane and Gary Valentine running around and falling in love in the San Fernando Valley, 1973.',
        href: '/nominee/licorice-pizza',
        nominate: '',
        releaseDate: '2021-12-25',
        mpaRating: 'R',
        runtime: '2h 13m',
        tmdb: '718032',
      },
      {
        name: 'Nightmare Alley',
        role: 'Guillermo del Toro, J. Miles Dale and Bradley Cooper, Producers',
        imageUrl: '/images/nightmareAlley.jpg',
        synopsis:
          'An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychologist who is even more dangerous than he is.',
        href: '/nominee/nightmare-alley',
        nominate: '',
        releaseDate: '2021-12-17',
        mpaRating: 'R',
        runtime: '2h 30m',
        tmdb: '597208',
      },
      {
        name: 'The Power of the Dog',
        role: 'Jane Campion, Tanya Seghatchian, Emile Sherman, Iain Canning and Roger Frappier, Producers',
        imageUrl: '/images/thePowerOfTheDog.jpg',
        synopsis: `A domineering but charismatic rancher wages a war of intimidation on his brother's new wife and her teen son, until long-hidden secrets come to light.`,
        href: '/nominee/the-power-of-the-dog',
        nominate: '',
        releaseDate: '2021-12-01',
        mpaRating: 'R',
        runtime: '2h 8m',
        tmdb: '600583',
      },
      {
        name: 'West Side Story',
        role: 'Steven Spielberg and Kristie Macosko Krieger, Producers',
        imageUrl: '/images/westSideStory.jpg',
        synopsis:
          'Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.',
        href: '/nominee/west-side-story',
        nominate: '',
        releaseDate: '2021-12-10',
        mpaRating: 'PG-13',
        runtime: '2h 37m',
        tmdb: '511809',
      },
    ],
    nextHref: '/category/cinematography',
    previousHref: '/category/animated-feature-film',
  },
  cinematography: {
    title: 'Cinematography',
    description:
      'Awarded to a cinematographer for his/her achievement in camera angles, movement, and tone captured through the camera for a particular motion picture.',
    nominees: [],
    nextHref: '/category/costume-design',
    previousHref: '/category/best-picture',
  },
  'costume-design': {
    title: 'Costume Design',
    description:
      'Awarded to the designer that prepares the attire of an individual, which adds to the character portrayed by the actor/actress (and extras) in a film.',
    nominees: [],
    nextHref: '/category/directing',
    previousHref: '/category/cinematography',
  },
  directing: {
    title: 'Directing',
    description:
      'Awarded to the director who has shown outstanding achievement in creating a singular vision of a particular film.',
    nominees: [],
    nextHref: '/category/documentary-feature',
    previousHref: '/category/costume-design',
  },
  'documentary-feature': {
    title: 'Documentary (Feature)',
    description:
      'Awarded to the documentary filmmakers that tell a real life story through various means.',
    nominees: [],
    nextHref: '/category/documentary-short-subject',
    previousHref: '/category/directing',
  },
  'documentary-short-subject': {
    title: 'Documentary (Short Subject)',
    description:
      'Awarded to the short documentary (less than 40 minutes) filmmakers that tell a real life story through various means.',
    nominees: [],
    nextHref: '/category/film-editing',
    previousHref: '/category/documentary-feature',
  },
  'film-editing': {
    title: 'Film Editing',
    description:
      'Awarded to the editor that is able to put shots together in a particular sequence in order to convey story and emotion from what was captured by the camera.',
    nominees: [],
    nextHref: '/category/international-feature-film',
    previousHref: '/category/documentary-short-subject',
  },
  'international-feature-film': {
    title: 'International Feature Film',
    description:
      'Awarded for the best film that is produced outside of the United States and is submitted in representation of a particular country.',
    nominees: [],
    nextHref: '/category/makeup-and-hairstyling',
    previousHref: '/category/film-editing',
  },
  'makeup-and-hairstyling': {
    title: 'Makeup and Hairstyling',
    description:
      'Awarded to those individuals who have the artistic flair to make an actor look like his/her character to perfection. This sometimes involves prothetics.',
    nominees: [],
    nextHref: '/category/music-original-score',
    previousHref: '/category/international-feature-film',
  },
  'music-original-score': {
    title: 'Music (Original Score)',
    description:
      'Awarded to the composer that has written the best underscore or body of music, written specifically for the motion picture.',
    nominees: [],
    nextHref: '/category/music-original-song',
    previousHref: '/category/makeup-and-hairstyling',
  },
  'music-original-song': {
    title: 'Music (Original Song)',
    description:
      'Awarded to the music composer and lyricists that compose an original song specifically for a given motion picture.',
    nominees: [],
    nextHref: '/category/production-design',
    previousHref: '/category/music-original-score',
  },
  'production-design': {
    title: 'Production Design',
    description:
      'Awarded to the designers that build the world the characters live in. This could be given for the use of existing locations as well as fabricated sets.',
    nominees: [],
    nextHref: '/category/short-film-animated',
    previousHref: '/category/music-original-song',
  },
  'short-film-animated': {
    title: 'Short Film (Animated)',
    description:
      'Awarded for the best collaborative efforts of an animated short film (less than 40 mins) between all the artists involved.',
    nominees: [],
    nextHref: '/category/short-film-live-action',
    previousHref: '/category/production-design',
  },
  'short-film-live-action': {
    title: 'Short Film (Live Action)',
    description:
      'Awarded for the best collaborative efforts of a short film (less than 40 mins) between all the artists involved.',
    nominees: [],
    nextHref: '/category/sound',
    previousHref: '/category/short-film-animated',
  },
  sound: {
    title: 'Sound',
    description:
      'Awarded to the sound engineers that create the actual sounds that you hear when something explodes or when you hear the footsteps of an actor/actress. Awarded the sound mixers and engineers that are able to add all of the sound effects, dialogue, and music together without making one aspect too noticable.',
    nominees: [],
    nextHref: '/category/visual-effects',
    previousHref: '/category/short-film-live-action',
  },
  'visual-effects': {
    title: 'Visual Effects',
    description:
      'Awarded for the best execution of visual effects by seemlessly integrating them into a motion picture.',
    nominees: [],
    nextHref: '/category/writing-adapted-screenplay',
    previousHref: '/category/sound',
  },
  'writing-adapted-screenplay': {
    title: 'Writing (Adapted Screenplay)',
    description:
      'Award to the writer or writers who have adapted the story from a different medium (another film, novel, play, or short story) into a film.',
    nominees: [],
    nextHref: '/category/writing-original-screenplay',
    previousHref: '/category/visual-effects',
  },
  'writing-original-screenplay': {
    title: 'Writing (Original Screenplay)',
    description:
      'Awarded to the writers that created a story not based upon previously published material.',
    nominees: [],
    nextHref: '/review',
    previousHref: '/category/writing-adapted-screenplay',
  },
}

const displayDate = (date) => {
  const options = { month: 'short' }
  const dateObj = new Date(date)
  const monthShort = new Intl.DateTimeFormat('en-US', options).format()
  const day = dateObj.getDay()
  const year = dateObj.getFullYear()
  return `${monthShort} ${day}, ${year}`
}

const truncateSynopsis = (synopsis) => {
  const CHAR_LIMIT = 150
  if (synopsis.length > CHAR_LIMIT) {
    return `${synopsis.slice(0, CHAR_LIMIT)}...`
  }
  return synopsis
}

const CategoryPage = ({ category }) => {
  const entities = nominations[category]
  return (
    <>
      <MetaTags title="Category" description="Category page" />

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-10 lg:pt-10 lg:pb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-yellow-500 sm:text-6xl">
                {entities.title}
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                {entities.description}
              </p>
            </div>
            <div className="mt-8 flex lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to={entities.previousHref}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-red-700 hover:bg-red-200"
                >
                  Previous
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to={entities.nextHref}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-red-700 hover:bg-red-200"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
              {entities.nominees.map((entity) => (
                <li key={entity.name} className="rounded-lg bg-white shadow">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="rounded-t-lg object-cover shadow-lg sm:rounded-l-lg sm:rounded-tr-none"
                        src={entity.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between divide-y divide-gray-200 pt-6 pr-6 sm:col-span-2 lg:pt-3 xl:pt-6">
                      <div className="space-y-2 lg:space-y-1 xl:space-y-2">
                        <div className="space-y-1 leading-6">
                          <h3 className="text-xl font-bold text-red-400">
                            {entity.name}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 lg:hidden xl:block">
                            {entity.role}
                          </p>
                        </div>
                        <div className="items-center text-xs text-gray-400">
                          <ul className="inline-flex list-disc">
                            <li className="mr-4 pr-1 first:list-none">
                              {displayDate(entity.releaseDate)}
                            </li>
                            <li className="mr-4 pr-1 ">{entity.mpaRating}</li>

                            <li className="mr-4 pr-1">{entity.runtime}</li>
                          </ul>
                        </div>
                        <div className="text-sm lg:text-xs xl:text-sm">
                          <p className="text-gray-500">
                            {truncateSynopsis(entity.synopsis)}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <div className="-mt-px flex divide-x divide-gray-200">
                          <div className="flex w-0 flex-1">
                            <Link
                              to={`mailto:${entity.nominate}`}
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
                              to={entity.href}
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
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
