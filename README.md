# Marco Vacchi - Portfolio Website

A visually stunning, highly interactive, and professional portfolio website for Marco Vacchi, a junior full-stack developer. Built with modern web technologies to showcase skills and projects in an impressive way.

![Portfolio Preview](https://via.placeholder.com/800x400/1e293b/ffffff?text=Marco+Vacchi+Portfolio)

## 🚀 Features

- **Stunning Visual Design**: Modern gradient backgrounds, glass-morphism effects, and smooth animations
- **3D Interactive Elements**: Floating 3D cube using Three.js with mouse-reactive animations
- **Custom Cursor**: Glowing cursor that reacts to interactive elements
- **Scroll-Based Animations**: Elements animate into view as user scrolls using Framer Motion
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Interactive Contact Form**: Fully functional contact form with validation and animations
- **Horizontal Project Gallery**: Unique scrolling gallery showcasing projects
- **Professional Timeline**: Experience and education displayed in an elegant timeline
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **3D Graphics**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **TypeScript**: Full type safety and better developer experience
- **Deployment**: Ready for [Vercel](https://vercel.com/) deployment

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/marcovacchi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎨 Customization

### Personal Information

Update the following files to customize the portfolio:

- **Personal details**: Edit content in each component (`components/HeroSection.tsx`, `components/AboutSection.tsx`, etc.)
- **Projects**: Update project data in `components/ProjectsSection.tsx`
- **Skills**: Modify skills array in `components/AboutSection.tsx`
- **Experience**: Update timeline in `components/ExperienceSection.tsx`
- **Contact info**: Change contact details in `components/ContactSection.tsx` and `components/Footer.tsx`

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Customize animations in `app/globals.css`
- **Fonts**: Change fonts in `app/layout.tsx`

### Images

Replace placeholder images with your own:

- Profile picture in `components/AboutSection.tsx`
- Project screenshots in `components/ProjectsSection.tsx`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── AboutSection.tsx     # About me section with skills
│   ├── BackToTop.tsx        # Back to top button
│   ├── ContactSection.tsx   # Contact form and info
│   ├── CustomCursor.tsx     # Custom cursor component
│   ├── ExperienceSection.tsx # Timeline of experience
│   ├── FloatingCube.tsx     # 3D floating cube
│   ├── Footer.tsx           # Footer with links
│   ├── HeroSection.tsx      # Hero section with animations
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── Navigation.tsx       # Navigation bar
│   └── ProjectsSection.tsx  # Projects gallery
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect to Vercel**

   - Push your code to GitHub
   - Connect your repository to [Vercel](https://vercel.com/)
   - Vercel will automatically deploy your site

2. **Manual deployment**
   ```bash
   npm run build
   ```

### Deploy on Netlify

1. **Build the project**

   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out` folder** to Netlify

### Environment Variables

No environment variables are required for basic functionality, but you may want to add:

- Email service API keys for the contact form
- Analytics tracking codes
- Any third-party service integrations

## ✨ Key Highlights

- **Modern Design**: Clean, professional design with attention to detail
- **Smooth Animations**: Thoughtfully designed animations that enhance user experience
- **3D Elements**: Interactive 3D graphics that respond to user interaction
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: Built with accessibility best practices in mind

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

For any questions or suggestions regarding this portfolio:

- **Email**: marco.vacchi@email.com
- **LinkedIn**: [linkedin.com/in/marcovacchi](https://linkedin.com/in/marcovacchi)
- **GitHub**: [github.com/marcovacchi](https://github.com/marcovacchi)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Marco Vacchi using Next.js, Tailwind CSS, and Framer Motion**
