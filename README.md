# ahmedloayelattar.github.io

Personal portfolio of Ahmed Loay Elattar, mechatronics and robotics engineer.

## Put it online (first time)

1. On GitHub, create a new **public** repository named exactly `AhmedLoayElattar.github.io`.
2. Unzip this folder on your computer.
3. In the new repo, click **Add file > Upload files**, drag in everything from the unzipped folder (`index.html`, `config.js`, `README.md`, and the `photos` and `cv` folders), then **Commit changes**.
4. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then Save.
5. After a minute or two the site is live at **https://ahmedloayelattar.github.io**.

## Add project photos

1. Open the `photos` folder in the repo, then the project's folder (for example `photos/rov`).
2. **Add file > Upload files**, drop in your images, commit.
3. Open `config.js`, click the pencil icon, and add one line per photo in that project's list:

   ```js
   rov: [
     ["photos/rov/pool-test.jpg", "Pool test before the 2026 competition"],
     ["photos/rov/2026-stack.jpg", "2026 control and power PCB stack"],
   ],
   ```

   The first photo becomes the tile cover. All of them appear in the gallery when someone opens the project.
4. Commit. The site refreshes in about a minute.

### Board history photos
The "Five generations of ROV boards" section shows one board at a time and changes it as you scroll. Give it one image per board, in order (2023, May 2024, Oct 2024, 2025, 2026): background-removed PNGs work best, from a photo or a 3D render. Keep every image the same size with the board centred the same way, so each change looks like the board transforming in place. Upload them to `photos/boards/` and fill the `boards` list at the top of `config.js`. Put `""` in a spot to skip a board; it keeps the built-in illustration.

Want to see every photo slot and the folder it expects? Open the site with `#photos` at the end:
`https://ahmedloayelattar.github.io/#photos`

### Photo tips
- JPG, about 1600 px wide, under 500 KB. Phone photos are usually 3 to 5 MB, so shrink them first (squoosh.app works well).
- Lowercase names with no spaces: `pool-test.jpg`, not `Pool Test.JPG`. GitHub is case-sensitive.
- Landscape shots make the best covers.

## Add your CV and a photo of yourself

- Upload your CV PDF into `cv/`, then set `cv: "cv/your-file.pdf"` in `config.js`. A Download CV button appears.
- Upload a square photo of yourself (for example `photos/me.jpg`) and set `me: "photos/me.jpg"`.

## Folder layout

```
index.html    the site (design and text)
config.js     your photos and CV, the only file you normally edit
photos/       one folder per project
cv/           your CV PDF
```
