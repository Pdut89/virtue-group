const navData = [
  {
    id: 0,
    name: 'Home',
    path: '/home',
    page: 'Home'
  },
  {
    id: 1,
    name: 'About',
    path: '/about',
    page: 'About'
  },
  {
    id: 2,
    name: 'Electrical',
    path: '/electrical',
    page: 'Electrical'
  },
  {
    id: 3,
    name: 'Plumbing',
    path: '/plumbing',
    page: 'Plumbing'
  },
  {
    id: 4,
    name: 'Contact Us',
    path: '/contact-us',
    page: 'Contact'
  }
]

const linkSize = {
  margin: .5,
  width: 7,
  height: 2.5,
  scoreWidth: 3,
  scoreThickness: .2
}

const findActiveLink = path => {
  return navData.find(item => item.path === path)
}

export { navData, linkSize, findActiveLink }