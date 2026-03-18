# hychowah.github.io

Personal portfolio site — built with Jekyll + Minimal Mistakes theme, hosted on GitHub Pages.

## Local Development

No local setup needed — GitHub Pages builds automatically on push.

If you want to preview locally:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Structure

```
_config.yml          # Site configuration
_data/navigation.yml # Top nav links
_pages/              # About, Projects index, CV
_projects/           # Individual project pages
assets/
  css/custom.css     # Style overrides
  images/projects/   # Project photos
  docs/              # CV PDF (add manually)
index.md             # Home page
```

## Adding a New Project

1. Create `_projects/0N-slug.md` with front matter (see existing files)
2. Add images to `assets/images/projects/`
3. Push to `main`

## TODO

- [ ] Add Learning Agent screenshots (web UI knowledge graph)
- [ ] Add Cable Robot teaser image
- [ ] Add CV PDF to `assets/docs/`
- [ ] Add professional headshot to `assets/images/`
- [ ] Verify all robot photos are free of client identifying marks
