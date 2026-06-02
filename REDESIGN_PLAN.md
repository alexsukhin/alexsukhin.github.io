# Portfolio Redesign Plan

## Overview
Transform the portfolio from a sidebar-based layout to a modern, centered design inspired by keanuc.net, with improved content organization and navigation.

---

## 1. Navigation Structure

### Current State
- Fixed sidebar on desktop, hamburger menu on mobile
- Navigation items: About, Projects, Contact (scroll-based active state)
- Sidebar always visible taking up screen space

### Proposed Design
- **Remove sidebar entirely** - implement a relaxed top navigation (like keanuc.net)
- **Top navigation** (not sticky, scrolls away naturally):
  - Position near "alexander sukhin" name
  - Minimal, integrated into the header
  - Links: **Home** | **Projects**
  - Should feel like part of the header, not a bar
- **Mobile**: Hamburger menu still works, but cleaner
- **Desktop-first optimization**: Primary layout designed for desktop

---

## 2. Layout Changes

### Current
```
┌─────────────────────────────────────────┐
│ Sidebar (fixed) │ Content (max-w-3xl)   │
│                 │ left-padded by sidebar│
└─────────────────────────────────────────┘
```

### Proposed
```
┌─────────────────────────────────────────┐
│        Centered Content (max-w-3xl)     │
│   (naturally centered, no padding)      │
│                                         │
│  alexander sukhin | Home | Projects     │
│                                         │
│  Main content goes here                 │
│                                         │
└─────────────────────────────────────────┘
```

### Technical Changes
- Remove `pl-16` (left padding for sidebar) from App.jsx
- Center content using flex or margin auto
- Content max-width: keep `max-w-3xl` for readability
- Top nav integrated into header area

---

## 3. Page Structure

### Home Page (`/`)
Sections (scrollable):
1. **Header with Nav** (not sticky)
   - "alexander sukhin" name
   - Relaxed navigation: Home | Projects
   - No visible bar styling, just integrated text/links

2. **About Section**
   - Current Header component (intro text)
   - "Hi, I'm Alex" + bio

3. **Experience & Education Section** (NEW)
   - Timeline-style layout
   - **Education**:
     - King's College London
     - BSc Computer Science with a Year in Industry
     - Years: 2024–2028 
   - **Experience**:
     - Serac Group
     - Software Engineer
     - Starting: June 2026
   - Use visual timeline design (vertical line with entries)

4. **Contact Section** (bottom)
   - Email icon → links to mailto:alex@sukhin.net (no text, icon-only)
   - GitHub icon → links to GitHub
   - LinkedIn icon → links to LinkedIn
   - Layout: horizontal flex, aligned left or centered

5. **Footer**
   - Current footer with copyright info

### Projects Page (`/projects`)
- All existing projects in grid:
  1. Live Messenger
  2. DevDash
  3. Grid Flex Agent
  4. JabRef Contributor
- **NEW Project: GreenBrick** (HackLondon win)
  - Title: "GreenBrick"
  - Description: Full-stack application for analyzing cost-benefit of property energy efficiency upgrades.
  - Skills: Python, JavaScript, FastAPI
  - Link: https://github.com/alexsukhin/GreenBrick-hacklondon26
- **NEW Project: GreenField** (HackSussex win)
  - Title: "GreenField"
  - Description: GreenField is a full stack IoT platform which calculates the exact volume of water needed for specific crops.
  - Skills: Python, JavaScript, FastAPI, Arduino
  - Link: https://github.com/alexsukhin/hacksussex2026

---

## 4. Contact Information Changes

### Current
```
<li className="flex items-center gap-3">
  <img src="/icons/email.png" alt="Email" />
  <a href="mailto:alex@sukhin.net">alex@sukhin.net</a>
</li>
```

### Proposed
```
<a href="mailto:alex@sukhin.net">
  <img src="/icons/email.png" alt="Email" />
</a>
```
- Remove the text "alex@sukhin.net"
- Icon becomes the clickable button
- No text label next to email icon

---

## 5. Component Changes Required

### New Components
- **Timeline** component for Experience/Education section
  - Vertical or horizontal timeline
  - Entries with: title, org/place, description, dates
  - Styled with stone/gray palette

### Modified Components
- **Sidebar.jsx**: 
  - Redesign completely (header nav integration)
  - OR: Rename to Header/Navigation
  - Keep mobile hamburger but integrate with header

- **App.jsx**:
  - Remove `pl-16` padding
  - Center content naturally
  - Integrate top nav into layout

- **Contact.jsx**:
  - Remove email text
  - Icon-only email link
  - Adjust layout

### Keep As-Is
- **ProjectCard.jsx**: Keep grid card design
- **Projects.jsx**: Add GreenBrick project to list
- **Header.jsx**: Keep intro section
- **Footer.jsx**: Keep footer

---

## 6. Visual Design Details

### Color Palette
- Keep: Stone/gray (stone-100, stone-200, stone-800, gray-900, gray-500, etc.)
- No changes to current scheme

### Typography
- Maintain current font hierarchy
- Header/nav: minimal, integrated

### Timeline Styling (Experience/Education)
- Use Tailwind for styling
- Example approach:
  - Vertical line (border-left on timeline items)
  - Cards or simple divs for each entry
  - Date on left, content on right (or vice versa)
  - Similar to keanuc.net experience section

### Spacing
- Content centered with max-w-3xl
- Maintain current gap/margin values between sections
- Mobile: adjust padding as needed

---

## 7. File Structure Changes

### Current Structure
```
src/
├── components/
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   ├── Sidebar.jsx
├── App.jsx
├── index.css
├── main.jsx
```

### Proposed Structure
```
src/
├── components/
│   ├── Contact.jsx (modified)
│   ├── Footer.jsx
│   ├── Header.jsx (kept or renamed)
│   ├── ProjectCard.jsx
│   ├── Projects.jsx (modified - add GreenBrick, GreenField)
│   ├── Navigation.jsx (new - replaces sidebar)
│   ├── Timeline.jsx (new - for experience/education)
│   ├── Experience.jsx (new - uses Timeline)
├── App.jsx (modified - layout changes)
├── index.css
├── main.jsx
```

---

## 8. Implementation Order

1. **Create Timeline component** - reusable for experience/education
2. **Create Experience component** - use Timeline, add data
3. **Create Navigation component** - replace Sidebar with integrated header nav
4. **Update App.jsx** - remove sidebar styling, center content, use Navigation
5. **Update Projects.jsx** - add GreenBrick project
6. **Update Contact.jsx** - remove email text
7. **Test responsive design** - ensure mobile works well
8. **Adjust spacing/styling** - fine-tune based on appearance

---

## 9. Data to Add

- **NEW Project: GreenBrick** (HackLondon win)
  - Title: "GreenBrick"
  - Description: Full-stack application for analyzing cost-benefit of property energy efficiency upgrades.
  - Skills: Python, JavaScript, FastAPI
  - Link: https://github.com/alexsukhin/GreenBrick-hacklondon26
- **NEW Project: GreenField** (HackSussex win)
  - Title: "GreenField"
  - Description: GreenField is a full stack IoT platform which calculates the exact volume of water needed for specific crops.
  - Skills: Python, JavaScript, FastAPI, Arduino
  - Link: https://github.com/alexsukhin/hacksussex2026

### Experience/Education Data
```
Education:
- School: King's College London
- Degree: BSc Computer Science with a Year in Industry
- Period: 2024 - 2028
- Status: In Progress (Year 2)

Experience:
- Company: Serac Group
- Role: Software Engineer
- Period: June 2026 - Present
```

---

## 10. Notes

- **Desktop-first**: Design looks great on desktop, responsive down to mobile
- **No sticky nav**: Top bar scrolls naturally with content (cleaner feel)
- **Centered content**: More breathing room, better typography readability
- **Minimal navbar**: Relaxed, integrated with header (not a traditional bar)
- **Mobile UX**: Hamburger menu still available, optimized for smaller screens
- **Color consistency**: Maintain stone/gray palette throughout

