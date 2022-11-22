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

const otherLinks = [
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

const films = {
  categories: [
    {
      description:
        'Awarded to acknowledge the caliber of an actor who has delivered an outstanding performance as the lead character in a film.',
      href: 'actor-in-a-leading-role',
      icon: UserIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [
        {
          title: 'Will Smith',
          description: 'King Richard',
          profile: {
            image:
              'https://www.themoviedb.org/t/p/original/uUZphDnv1frn4KgBAhp6tPxVsTM.jpg',
            totalNominations: '2',
            totalWins: '0',
            lastWin: '0',
          },
          recentFilms: [
            {
              title: 'Bad Boys for Life',
              year: '2020',
              image:
                'https://www.themoviedb.org/t/p/original/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
            },
            {
              title: 'Spies in Disguise',
              year: '2019',
              image:
                'https://www.themoviedb.org/t/p/original/30YacPAcxpNemhhwX0PVUl9pVA3.jpg',
            },
            {
              title: 'Gemini Man',
              year: '2019',
              image:
                'https://www.themoviedb.org/t/p/original/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg',
            },
            {
              title: 'Aladdin',
              year: '2019',
              image:
                'https://www.themoviedb.org/t/p/original/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg',
            },
            {
              title: 'Bright',
              year: '2017',
              image:
                'https://www.themoviedb.org/t/p/original/whkT53Sv2vKAUiknQ13pqcWaPXB.jpg',
            },
          ],
          type: 'person',
          href: '/nominee/will-smith',
          tmdb: 'https://www.themoviedb.org/person/2888-will-smith',
          imdb: 'https://www.imdb.com/name/nm0000226/',
          boxd: 'https://boxd.it/4cbZ',
          otherNominationsCurrentYear: [],
        },
        {
          title: 'Javier Bardem',
          description: 'Being the Ricardos',
          type: 'person',
          href: '',
        },
        {
          title: 'Benedict Cumberbatch',
          description: 'The Power of the Dog',
          type: 'person',
          href: '',
        },
        {
          title: 'Andrew Garfield',
          description: 'tick, tick...BOOM!',
          type: 'person',
          href: '',
        },
        {
          title: 'Denzel Washington',
          description: 'The Tragedy of Macbeth',
          type: 'person',
          href: '',
        },
      ],
      title: 'Actor in a Leading Role',
    },
    {
      description:
        'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
      href: 'actor-in-a-supporting-role',
      icon: UsersIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Actor in a Supporting Role',
    },
    {
      description:
        'Awarded to acknowledge the caliber of an actress who has delivered an outstanding performance as the lead character in a film.',
      href: 'actress-in-a-leading-role',
      icon: UserIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Actress in a Leading Role',
    },
    {
      description:
        'In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.',
      href: 'actress-in-a-supporting-role',
      icon: UsersIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Actress in a Supporting Role',
    },
    {
      description:
        'Awarded for the best collaborative efforts of an animated feature film between the producer(s), director(s), actor(s), writer(s), animator(s) and lots of other artists.',
      href: 'animated-feature-film',
      icon: ComputerDesktopIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Animated Feature Film',
    },
    {
      description:
        'Awarded to the producers, the Best Picture statuette is awarded for the best collaborative efforts of the producer(s), director(s), actor(s), writer(s) and lots of other artists.',
      href: 'best-picture',
      icon: TrophyIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Best Picture',
    },
    {
      description:
        'Awarded to a cinematographer for his/her achievement in camera angles, movement, and tone captured through the camera for a particular motion picture.',
      href: 'cinematography',
      icon: VideoCameraIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Cinematography',
    },
    {
      description:
        'Awarded to the designer that prepares the attire of an individual, which adds to the character portrayed by the actor/actress (and extras) in a film.',
      href: 'costume-design',
      icon: ShoppingBagIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Costume Design',
    },
    {
      description:
        'Awarded to the director who has shown outstanding achievement in creating a singular vision of a particular film.',
      href: 'directing',
      icon: MegaphoneIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Directing',
    },
    {
      description:
        'Awarded to the documentary filmmakers that tell a real life story through various means.',
      href: 'documentary-feature',
      icon: FilmIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Documentary (Feature)',
    },
    {
      description:
        'Awarded to the short documentary (less than 40 minutes) filmmakers that tell a real life story through various means.',
      href: 'documentary-short-subject',
      icon: FilmIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Documentary (Short Subject)',
    },
    {
      description:
        'Awarded to the editor that is able to put shots together in a particular sequence in order to convey story and emotion from what was captured by the camera.',
      href: 'film-editing',
      icon: ScissorsIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Film Editing',
    },
    {
      description:
        'Awarded for the best film that is produced outside of the United States and is submitted in representation of a particular country.',
      href: 'international-feature-film',
      icon: GlobeEuropeAfricaIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'International Feature Film',
    },
    {
      description:
        'Awarded to those individuals who have the artistic flair to make an actor look like his/her character to perfection. This sometimes involves prothetics.',
      href: 'makeup-and-hairstyling',
      icon: PaintBrushIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Makeup and Hairstyling',
    },
    {
      description:
        'Awarded to the composer that has written the best underscore or body of music, written specifically for the motion picture.',
      href: 'music-original-score',
      icon: MusicalNoteIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Music (Original Score)',
    },
    {
      description:
        'Awarded to the music composer and lyricists that compose an original song specifically for a given motion picture.',
      href: 'music-original-song',
      icon: MusicalNoteIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Music (Original Song)',
    },
    {
      description:
        'Awarded to the designers that build the world the characters live in. This could be given for the use of existing locations as well as fabricated sets.',
      href: 'production-design',
      icon: SwatchIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Production Design',
    },
    {
      description:
        'Awarded for the best collaborative efforts of an animated short film (less than 40 mins) between all the artists involved.',
      href: 'short-film-animated',
      icon: ComputerDesktopIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Short Film (Animated)',
    },
    {
      description:
        'Awarded for the best collaborative efforts of a short film (less than 40 mins) between all the artists involved.',
      href: 'short-film-live-action',
      icon: FilmIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Short Film (Live Action)',
    },
    {
      description:
        'Awarded to the sound engineers that create the actual sounds that you hear when something explodes or when you hear the footsteps of an actor/actress. Awarded the sound mixers and engineers that are able to add all of the sound effects, dialogue, and music together without making one aspect too noticable.',
      href: 'sound',
      icon: MicrophoneIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Sound',
    },
    {
      description:
        'Awarded for the best execution of visual effects by seemlessly integrating them into a motion picture.',
      href: 'visual-effects',
      icon: SparklesIcon,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
      nominees: [],
      title: 'Visual Effects',
    },
    {
      description:
        'Award to the writer or writers who have adapted the story from a different medium (another film, novel, play, or short story) into a film.',
      href: 'writing-adapted-screenplay',
      icon: PencilSquareIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Writing (Adapted Screenplay)',
    },
    {
      description:
        'Awarded to the writers that created a story not based upon previously published material.',
      href: 'writing-original-screenlay',
      icon: PencilIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      nominees: [],
      title: 'Writing (Original Screenplay)',
    },
  ],
}

export { films, otherLinks }
