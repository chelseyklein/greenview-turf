Before making any changes, run `git branch --show-current`. If the current branch is `main`, create and check out a new feature branch named `update/gallery-YYYYMMDD` (use today's date) and tell the user which branch was created. If already on a feature branch, proceed without creating a new one.

Add a new photo to the gallery carousel in index.html.

First, ask the user:
1. What is the filename of the image? (It should already be copied into the `images/` folder)
2. What is a short description of what the photo shows? (This becomes the alt text for accessibility)

Then:
- Verify the file exists in the `images/` directory
- Add a new `<div class="carousel-slide">` block to the carousel track in the `#gallery` section
- Use the filename and description the user provided
- Place it at the end of the existing slides

The carousel slide format is:
```html
<div class="carousel-slide">
  <img src="images/FILENAME" alt="DESCRIPTION" />
</div>
```

After adding it, let the user know it was added and remind them to preview the site locally to confirm it looks right before publishing.
