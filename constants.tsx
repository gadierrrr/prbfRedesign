
import { Destination, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Explore', href: '#' },
  { label: 'Culebra', href: '#' },
  { label: 'Vieques', href: '#' },
  { label: 'Experiences', href: '#' }
];

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Mar Chiquita',
    location: 'Mar Chiquita, Manatí',
    description: 'Iconic limestone cove with crystal clear pool. Perfect for photography and shallow wading.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbewX5TvHgzJWsiTCuwjuSQgyAJA6N1vemKS5cbMMrWhBr5HMslS2MVIBM6pYDb0JbQqLZsJZm-_GM9o9hKHZvF_9catMA02IRcM12AkqwTdWffk7gvT-PceCLeVFdqcQUA0At31CxXmXTpMDtLUrKyKSwNKFCbCIwFVdGRlHrLvGpyOkQRYLQaUOjwcidgufFAKm5qjynhGAQIncCbW5UiOaTyH2pQLGlDLpAyh8-pyAnAfb6uhWYURLt-Xv6Xoc64HDIGtC8WIn',
    views: '1.2k',
    tags: ['Photography', 'Shallow']
  },
  {
    id: '2',
    name: 'Cayo Icacos',
    location: 'Cayo Icacos, Fajardo',
    description: 'Pristine island paradise for snorkeling and relaxation. Accessible only by boat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg7-O7poD7SzktxRn6pIox-CRb3qavtXJWbwsxF_KJTjoPBM9Xmdtk7LlFachoAeohOeMLqCWf0ceTBZeygsiXdUVssZWz9gJZOcWTey-4uXIzc4dFWLn-SG12V7x8cnaSzdv7j15tO4-lAvGhqEkPHiHvzyuKlI4zMZORtwkPA2xeVp0qVyEP8smpI8bIzItzzAAKZfNW8SBgjrT-gZcDO6jTK6BqCtNkfx1IFrITDOu7hOZg15o7lHgYqan0WUHHBP7_Oo7S3oA',
    views: '550',
    tags: ['Snorkeling', 'Relaxation']
  },
  {
    id: '3',
    name: 'Flamenco Beach',
    location: 'Culebra, PR',
    description: 'Consistently ranked among the world top beaches, known for white sands and blue waters.',
    image: 'https://picsum.photos/id/10/800/600',
    views: '2.4k',
    tags: ['Top Ranked', 'White Sand']
  },
  {
    id: '4',
    name: 'Playa Sucia',
    location: 'Cabo Rojo, PR',
    description: 'Breathtaking views of the lighthouse and rugged cliffs. A must-visit for nature lovers.',
    image: 'https://picsum.photos/id/12/800/600',
    views: '800',
    tags: ['Nature', 'Cliffs']
  }
];
