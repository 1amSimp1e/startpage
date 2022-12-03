/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"Igra4euz8dTrUtKT","label":"School","bookmarks":[{"id":"6zUL4aut0m6AWZd2","label":"Apps ","url":"https://launchpad.classlink.com/pasadenaisd"},{"id":"rItKcrPQeadidFEa","label":"Dics","url":"https://www.oxfordlearnersdictionaries.com/us/"},{"id":"oiG2d0lHmxU1KK5D","label":"Khan Academy","url":"https://www.khanacademy.org/profile/me/courses"}]},{"id":"OUiV3R7xfeOFZPcz","label":"Movies&Vids","bookmarks":[{"id":"UNzIfsldFegPfvOj","label":"Youtube","url":"https://youtube.com"},{"id":"ENOO8XTXYu0xeSLJ","label":"Netflix","url":"https://www.netflix.com/browse"},{"id":"FjUv8S499IkNQPH6","label":"Twitch","url":"https://twitch.tv"}]},{"id":"98TWN9PtEcLkfOv8","label":"Social","bookmarks":[{"id":"eb9netoREMTyyEFX","label":"Reddit","url":"https://reddit.com"},{"id":"Zs3DVayrxgTvyBzT","label":"Facebook","url":"https://facebook.com"},{"id":"A5FzRBG5INeXJoRK","label":"Twitter","url":"https://twitter.com"}]},{"id":"W0M0nTJVmG2SiTVZ","label":"Devs","bookmarks":[{"id":"YBvtmC4pK1D1WGA8","label":"Github","url":"https://github.com"},{"id":"VselqFgyTLo9xdZg","label":"Freecodecamp","url":"https://www.freecodecamp.org/learn"},{"id":"NTtrxjyLW8jCttJC","label":"AngryTools","url":"https://angrytools.com"}]},{"id":"11GINBgTYwnsPZg4","label":"Linux","bookmarks":[{"id":"FzD4z12d1LiaiUg9","label":"r/UnixPorn","url":"https://www.reddit.com/r/unixporn/"},{"id":"BaLE0ZmHfHH8K0RC","label":"Arch Wiki","url":"https://wiki.archlinux.org/"}]},{"id":"wtqWqlywB8hszpWF","label":"News","bookmarks":[{"id":"nPaHeoNxma7forx5","label":"Its FOSS","url":"https://wiki.archlinux.org/"},{"id":"4Fg2oMf6LhLh89kO","label":"The Verge","url":"https://www.theverge.com/"},{"id":"33pvMPoS2XZseovh","label":"Linux Today","url":"https://linuxtoday.com"}]},{"id":"FjFqnw7peUAlYpAT","label":"Blogs","bookmarks":[{"id":"NNvD9STxV2CMWb4m","label":"Hash Node ","url":"https://hashnode.com/"},{"id":"oN424NAZpYQTCkL2","label":"Dev.to","url":"https://dev.to/"},{"id":"UQIslhS7aHyA33fX","label":"Hacker Noon","url":"https://hackernoon.com/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
