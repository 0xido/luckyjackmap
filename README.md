# ⛵️ Lucky Jack Map

Lucky Jack Map is a website about the main characters "Lucky" Jack Aubrey & Stephen Maturin, who appear in Patrick O´Brian´s books and the film "Master and Commander: The far side of the world".

The most interesting section is the map, where you can find the trajectory of each book, the markers with the most important events/places/battles, filter them (not yet) and access the summary of each one with their own synopsis, main characters, and ships.

# Development 

The website is created with HTML/CSS/JS and I´m considering to moving it to another platform that reduces the creation of each summary page.

I´ve used the base of the project [ROP-MAP](https://rop-map.com/) created by @Algernhon to make the map section, and I´ve been using DALL-E to create most of the popups images.

This project also uses [LeafLet library](https://leafletjs.com) for the interactive map like Algernhon project.

## Structure

The structure is straightforward, but it may be subject to change during development.

- ./books/ - Main page of books and page of each book.
- ./css/ - All CSS files of the project (each scss file to be worked on separately)
- ./data/ - All markers/paths data in JSON format *(copied of Algerhon project)*
- ./img/ - All images of: books covers *(not used at the moment, are linked now)*, icons, markers, paths (for each book summary), popups images, resources
- ./js/ - JS part of the project *(copied of Algerhon project)*, but with some separation between the parts.

## Roadmap

The **0.0 version** - is not available on production, I´ve to create more content and do more research for each book and path. Now you can play with:
 - [X] Show the path and part of the events in the books (HMS Surprise, The Mauritius Command, Desolation Island, The Fortune of War and Surgeon´s Mate).
 - [X] Open and close the filter section.
 - [X] Access the structure of the books page and the first book page (Master & Commander).
 - [ ] Responsive is not available, so small resolutions are not available either.


Next steps I would like to take:
- [ ] Find a way to create multitude of paths for each book with a different color. This is because different paths appear in each book.
- [ ] Create a filter system which works correctly (it doesn´t work right now).
- [ ] Make the responsive.
- [ ] Evaluate the move to a platform.

 I´m open to any help you can give me (specially in code, I´m a bit noobie 😅). You can contact me [at].
 

# Credits

Special thanks to:
 - Algernhon [@algernhon] for his project [ROP-MAP](https://rop-map.com/), I was looking to find a way to create this project and he brought me the base with his code. 
 - Tom Horn for his data and for allowing me to use it. All the data for the markers will be taken from [The Patrick O'Brian Mapping Project](https://www.cannonade.net/index.php).
