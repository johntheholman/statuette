/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
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

const awardsCategories = [
  {
    title: 'Actor in a Leading Role',
    description:
      'Awarded to acknowledge the caliber of an actor who has delivered an outstanding performance as the lead character in a film.',
    href: '#',
    icon: UserIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Actor in a Supporting Role',
    description:
      'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Actress in a Leading Role',
    description:
      'Awarded to acknowledge the caliber of an actress who has delivered an outstanding performance as the lead character in a film.',
    href: '#',
    icon: UserIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Actress in a Supporting Role',
    description:
      'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Animated Feature Film',
    description:
      'Awarded for the best collaborative efforts of an animated feature film between the producer(s), director(s), actor(s), writer(s), animator(s) and lots of other artists.',
    href: '#',
    icon: ComputerDesktopIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Cinematography',
    description:
      'Awarded to a cinematographer for his/her achievement in camera angles, movement, and tone captured through the camera for a particular motion picture.',
    href: '#',
    icon: VideoCameraIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Costume Design',
    description:
      'Awarded to the designer that prepares the attire of an individual, which adds to the character portrayed by the actor/actress (and extras) in a film.',
    href: '#',
    icon: ShoppingBagIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Directing',
    description:
      'Awarded to the director who has shown outstanding achievement in creating a singular vision of a particular film.',
    href: '#',
    icon: MegaphoneIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Documentary (Feature)',
    description:
      'Awarded to the documentary filmmakers that tell a real life story through various means.',
    href: '#',
    icon: FilmIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Documentary (Short Subject)',
    description:
      'Awarded to the short documentary (less than 40 minutes) filmmakers that tell a real life story through various means.',
    href: '#',
    icon: FilmIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Film Editing',
    description:
      'Awarded to the editor that is able to put shots together in a particular sequence in order to convey story and emotion from what was captured by the camera.',
    href: '#',
    icon: ScissorsIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'International Feature Film',
    description:
      'Awarded for the best film that is produced outside of the United States and is submitted in representation of a particular country.',
    href: '#',
    icon: GlobeEuropeAfricaIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Makeup and Hairstyling',
    description:
      'Awarded to those individuals who have the artistic flair to make an actor look like his/her character to perfection. This sometimes involves prothetics.',
    href: '#',
    icon: PaintBrushIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Music (Original Score)',
    description:
      'Awarded to the composer that has written the best underscore or body of music, written specifically for the motion picture.',
    href: '#',
    icon: MusicalNoteIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Music (Original Song)',
    description:
      'Awarded to the music composer and lyricists that compose an original song specifically for a given motion picture.',
    href: '#',
    icon: MusicalNoteIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Best Picture',
    description:
      'Awarded to the producers, the Best Picture statuette is awarded for the best collaborative efforts of the producer(s), director(s), actor(s), writer(s) and lots of other artists.',
    href: '#',
    icon: TrophyIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Production Design',
    description:
      'Awarded to the designers that build the world the characters live in. This could be given for the use of existing locations as well as fabricated sets.',
    href: '#',
    icon: SwatchIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Short Film (Animated)',
    description:
      'Awarded for the best collaborative efforts of an animated short film (less than 40 mins) between all the artists involved.',
    href: '#',
    icon: ComputerDesktopIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Short Film (Live Action)',
    description:
      'Awarded for the best collaborative efforts of a short film (less than 40 mins) between all the artists involved.',
    href: '#',
    icon: FilmIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Sound',
    description:
      'Awarded to the sound engineers that create the actual sounds that you hear when something explodes or when you hear the footsteps of an actor/actress. Awarded the sound mixers and engineers that are able to add all of the sound effects, dialogue, and music together without making one aspect too noticable.',
    href: '#',
    icon: MicrophoneIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Visual Effects',
    description:
      'Awarded for the best execution of visual effects by seemlessly integrating them into a motion picture.',
    href: '#',
    icon: SparklesIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Writing (Adapted Screenplay)',
    description:
      'Award to the writer or writers who have adapted the story from a different medium (another film, novel, play, or short story) into a film.',
    href: '#',
    icon: PencilSquareIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Writing (Original Screenplay)',
    description:
      'Awarded to the writers that created a story not based upon previously published material.',
    href: '#',
    icon: PencilIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Review Picks',
    description:
      'Drag-and-drop your choices next to the confidence level you have for each category. 24 is the highest confidence and 1 is the lowest confidence. Get a category right and you will be awarded the points.',
    href: '/review',
    icon: CheckIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CategoriesPage = () => {
  return (
    <>
      <MetaTags title="Categories" description="Categories page" />

      <div className="relative overflow-hidden">
        <div className="pt-16 pb-16 sm:pt-24 sm:pb-10 lg:pt-10 lg:pb-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
                Categories
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                Explore each category and learn how the recipent is chosen. You
                can also go directly to that category to make your nomination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-8 px-5">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {awardsCategories.map((award, awardIdx) => (
            <div
              key={award.title}
              className={classNames(
                awardIdx === 0
                  ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                  : '',
                awardIdx === 1 ? 'sm:rounded-tr-lg' : '',
                awardIdx === award.length - 2 ? 'sm:rounded-bl-lg' : '',
                awardIdx === award.length - 1
                  ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                  : '',
                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
              )}
            >
              <div>
                <span
                  className={classNames(
                    award.iconBackground,
                    award.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white'
                  )}
                >
                  <award.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link to={award.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {award.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {award.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoriesPage
