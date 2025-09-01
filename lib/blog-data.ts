export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-nextjs-14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and its latest features including Server Components and App Router.',
    content: `Next.js 14 brings exciting new features and improvements that make building web applications faster and more enjoyable. In this comprehensive guide, we'll explore the key features and best practices.

## Introduction to Next.js 14

Next.js 14 is a powerful React framework that provides everything you need to build production-ready applications. With its latest release, the framework has become even more powerful with improved performance and developer experience.

### Key Features

1. **App Router**: The new App Router provides a more intuitive way to handle routing in your applications.
2. **Server Components**: By default, components are server components, reducing the JavaScript sent to the client.
3. **Turbopack**: The new bundler that's up to 700x faster than Webpack.
4. **Image Optimization**: Automatic image optimization with the next/image component.

## Getting Started

To create a new Next.js 14 project, you can use the following command:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices configured out of the box.

### Project Structure

The new App Router uses a different project structure:

- \`app/\`: Contains your application routes and layouts
- \`public/\`: Static files like images and fonts
- \`lib/\`: Utility functions and shared code
- \`components/\`: Reusable React components

## Building Your First Page

Creating pages in Next.js 14 is straightforward. Simply create a \`page.tsx\` file in the app directory:

\`\`\`tsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js 14</h1>
    </main>
  );
}
\`\`\`

## Conclusion

Next.js 14 represents a significant step forward in web development. With its powerful features and excellent developer experience, it's an excellent choice for your next project.`,
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Web Development',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Advanced Types and Patterns',
    slug: 'mastering-typescript-advanced',
    excerpt: 'Dive deep into TypeScript\'s advanced type system and learn patterns that will make your code more maintainable and type-safe.',
    content: `TypeScript has evolved into an essential tool for modern JavaScript development. In this article, we'll explore advanced TypeScript features that can elevate your code quality.

## Understanding Advanced Types

TypeScript's type system is incredibly powerful, offering features that go far beyond simple type annotations.

### Union and Intersection Types

Union types allow a value to be one of several types:

\`\`\`typescript
type Status = 'pending' | 'approved' | 'rejected';
type Response = SuccessResponse | ErrorResponse;
\`\`\`

Intersection types combine multiple types into one:

\`\`\`typescript
type User = Person & Employee & {
  id: string;
  createdAt: Date;
};
\`\`\`

### Generics and Type Parameters

Generics provide a way to create reusable components:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

class DataStore<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
}
\`\`\`

## Utility Types

TypeScript provides several utility types that can transform existing types:

- \`Partial<T>\`: Makes all properties optional
- \`Required<T>\`: Makes all properties required
- \`Readonly<T>\`: Makes all properties readonly
- \`Pick<T, K>\`: Creates a type with only selected properties
- \`Omit<T, K>\`: Creates a type excluding specific properties

## Type Guards and Narrowing

Type guards help TypeScript understand the type of a variable at runtime:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

if (isString(data)) {
  console.log(data.toUpperCase());
}
\`\`\`

## Best Practices

1. Use strict mode for better type safety
2. Prefer interfaces for object shapes
3. Use const assertions for literal types
4. Leverage type inference when possible
5. Document complex types with JSDoc comments

## Conclusion

Mastering TypeScript's advanced features will significantly improve your code quality and developer experience. Start incorporating these patterns gradually and watch your codebase become more maintainable.`,
    author: 'Michael Chen',
    date: '2024-03-12',
    category: 'Programming',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Building Responsive Layouts with Tailwind CSS',
    slug: 'responsive-layouts-tailwind',
    excerpt: 'Discover how to create beautiful, responsive layouts using Tailwind CSS utility classes and modern CSS techniques.',
    content: `Tailwind CSS has revolutionized how we approach styling in web development. Let's explore how to build responsive layouts that look great on all devices.

## Introduction to Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.

### Why Tailwind?

- **Rapid Development**: Build interfaces quickly without writing custom CSS
- **Consistency**: Predefined design system ensures consistency
- **Responsive Design**: Built-in responsive modifiers
- **Small Bundle Size**: PurgeCSS removes unused styles

## Responsive Design Principles

Tailwind uses a mobile-first approach with responsive breakpoints:

- \`sm:\` - 640px and up
- \`md:\` - 768px and up
- \`lg:\` - 1024px and up
- \`xl:\` - 1280px and up
- \`2xl:\` - 1536px and up

### Example: Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>
\`\`\`

## Flexbox Layouts

Tailwind makes working with Flexbox intuitive:

\`\`\`html
<div class="flex flex-col md:flex-row items-center justify-between">
  <div class="w-full md:w-1/2">Content</div>
  <div class="w-full md:w-1/2">Sidebar</div>
</div>
\`\`\`

## Container and Spacing

The container class provides responsive max-widths:

\`\`\`html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
\`\`\`

## Advanced Techniques

### Custom Components

Create reusable components with @apply:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
\`\`\`

### Dark Mode

Tailwind supports dark mode out of the box:

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- Content adapts to dark mode -->
</div>
\`\`\`

## Best Practices

1. Use semantic HTML elements
2. Extract repeated patterns into components
3. Leverage Tailwind's configuration file
4. Use responsive modifiers consistently
5. Test on real devices

## Conclusion

Tailwind CSS empowers developers to build responsive, maintainable layouts quickly. Its utility-first approach might feel different initially, but the productivity gains are substantial.`,
    author: 'Emily Rodriguez',
    date: '2024-03-10',
    category: 'CSS',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'State Management in React: Redux vs Context API',
    slug: 'state-management-react',
    excerpt: 'Compare Redux and Context API for state management in React applications and learn when to use each approach.',
    content: `State management is crucial for building scalable React applications. Let's explore two popular approaches: Redux and the Context API.

## Understanding State Management

As React applications grow, managing state becomes increasingly complex. Props drilling, component coupling, and state synchronization are common challenges.

## Context API

The Context API is React's built-in solution for state management.

### When to Use Context API

- Small to medium-sized applications
- Avoiding prop drilling
- Theme management
- User authentication state

### Implementation Example

\`\`\`jsx
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
\`\`\`

### Pros and Cons

**Pros:**
- Built into React
- Simple API
- No additional dependencies
- Great for simple state

**Cons:**
- Can cause unnecessary re-renders
- Not ideal for complex state logic
- Limited debugging tools

## Redux

Redux is a predictable state container for JavaScript applications.

### Core Concepts

1. **Store**: Single source of truth
2. **Actions**: Describe what happened
3. **Reducers**: Specify how state changes

### Implementation Example

\`\`\`javascript
// Actions
const INCREMENT = 'INCREMENT';
const increment = (amount) => ({
  type: INCREMENT,
  payload: amount
});

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);
\`\`\`

### Redux Toolkit

Modern Redux development uses Redux Toolkit:

\`\`\`javascript
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    }
  }
});
\`\`\`

### Pros and Cons

**Pros:**
- Predictable state updates
- Excellent debugging tools
- Time-travel debugging
- Middleware support

**Cons:**
- Boilerplate code
- Learning curve
- Overkill for simple apps

## Making the Choice

### Use Context API When:
- Building small applications
- Managing UI state (themes, modals)
- Avoiding external dependencies
- Simple state requirements

### Use Redux When:
- Building large applications
- Complex state logic
- Need debugging capabilities
- Multiple data sources

## Alternative Solutions

- **Zustand**: Lightweight state management
- **MobX**: Object-oriented state management
- **Recoil**: Facebook's experimental solution
- **Jotai**: Atomic state management

## Conclusion

Both Redux and Context API have their place in React development. Choose based on your application's complexity and requirements. Start simple with Context API and migrate to Redux when needed.`,
    author: 'David Park',
    date: '2024-03-08',
    category: 'React',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Web Performance Optimization Techniques',
    slug: 'web-performance-optimization',
    excerpt: 'Learn essential techniques to improve your website\'s loading speed and overall performance for better user experience.',
    content: `Web performance directly impacts user experience, SEO rankings, and conversion rates. Let's explore techniques to optimize your website's performance.

## Why Performance Matters

- **User Experience**: 53% of users abandon sites that take over 3 seconds to load
- **SEO**: Google uses page speed as a ranking factor
- **Conversions**: Every second of delay reduces conversions by 7%

## Measuring Performance

### Core Web Vitals

1. **LCP (Largest Contentful Paint)**: Loading performance
2. **FID (First Input Delay)**: Interactivity
3. **CLS (Cumulative Layout Shift)**: Visual stability

### Tools for Measurement

- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools

## Optimization Techniques

### 1. Image Optimization

Images often account for most of a page's weight.

\`\`\`html
<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

**Best Practices:**
- Use WebP or AVIF formats
- Implement lazy loading
- Serve responsive images
- Compress images properly

### 2. Code Splitting

Break your JavaScript bundle into smaller chunks:

\`\`\`javascript
// Dynamic imports
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### 3. Caching Strategies

Implement proper caching headers:

\`\`\`nginx
# Static assets
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
\`\`\`

### 4. Critical CSS

Inline critical CSS and defer non-critical styles:

\`\`\`html
<style>
  /* Critical CSS inline */
  body { margin: 0; }
  .header { background: #fff; }
</style>
<link rel="preload" href="styles.css" as="style">
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
\`\`\`

### 5. Resource Hints

Use resource hints to improve loading:

\`\`\`html
<link rel="dns-prefetch" href="//api.example.com">
<link rel="preconnect" href="//fonts.googleapis.com">
<link rel="prefetch" href="/next-page.html">
<link rel="preload" href="/font.woff2" as="font" crossorigin>
\`\`\`

## JavaScript Performance

### Minimize Main Thread Work

- Use Web Workers for heavy computations
- Debounce and throttle event handlers
- Virtual scrolling for long lists

\`\`\`javascript
// Debounce example
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
\`\`\`

### Bundle Optimization

- Tree shaking
- Minification
- Compression (gzip/brotli)
- Remove unused dependencies

## Network Optimization

### HTTP/2 and HTTP/3

- Multiplexing
- Server push
- Header compression

### CDN Usage

Distribute content globally:
- Static assets on CDN
- Edge computing
- Geographic distribution

## Monitoring and Continuous Improvement

1. Set performance budgets
2. Monitor real user metrics (RUM)
3. A/B test optimizations
4. Regular performance audits

## Conclusion

Web performance optimization is an ongoing process. Start with the biggest impact items, measure improvements, and iterate. Remember that perceived performance is as important as actual performance.`,
    author: 'Alex Thompson',
    date: '2024-03-05',
    category: 'Performance',
    readTime: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'Modern Authentication: JWT vs Session-Based',
    slug: 'modern-authentication-jwt-sessions',
    excerpt: 'Explore the differences between JWT and session-based authentication, and learn how to implement secure authentication in your applications.',
    content: `Authentication is a critical component of web applications. Let's compare two popular approaches: JWT (JSON Web Tokens) and session-based authentication.

## Understanding Authentication

Authentication verifies who a user is, while authorization determines what they can access. Both JWT and sessions handle these concerns differently.

## Session-Based Authentication

Traditional session-based authentication stores user state on the server.

### How It Works

1. User submits credentials
2. Server validates and creates session
3. Session ID sent to client as cookie
4. Client sends cookie with each request
5. Server validates session ID

### Implementation Example

\`\`\`javascript
// Express.js example
app.post('/login', async (req, res) => {
  const user = await validateCredentials(req.body);
  if (user) {
    req.session.userId = user.id;
    res.json({ success: true });
  }
});

app.get('/protected', (req, res) => {
  if (req.session.userId) {
    res.json({ data: 'secret' });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});
\`\`\`

### Pros and Cons

**Pros:**
- Server controls sessions
- Easy to revoke access
- Smaller request size
- Works well with traditional apps

**Cons:**
- Server state required
- Scaling challenges
- CSRF vulnerability
- Not ideal for mobile apps

## JWT Authentication

JWT is a stateless authentication mechanism using digitally signed tokens.

### JWT Structure

A JWT consists of three parts:
1. **Header**: Algorithm and token type
2. **Payload**: Claims and user data
3. **Signature**: Verification signature

\`\`\`javascript
// JWT structure
header.payload.signature

// Decoded example
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
}
\`\`\`

### Implementation Example

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generate token
app.post('/login', async (req, res) => {
  const user = await validateCredentials(req.body);
  if (user) {
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    res.json({ token });
  }
});

// Verify token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}
\`\`\`

### Pros and Cons

**Pros:**
- Stateless and scalable
- Mobile-friendly
- Cross-domain support
- Self-contained

**Cons:**
- Larger request size
- Cannot revoke easily
- Token storage concerns
- Complexity in refresh logic

## Security Considerations

### Session Security

- Use HTTPS always
- Implement CSRF protection
- Set secure cookie flags
- Regular session rotation

### JWT Security

- Never store sensitive data
- Use strong secrets
- Implement refresh tokens
- Short expiration times
- Proper token storage

## Hybrid Approach

Combine both methods for optimal security:

\`\`\`javascript
// Refresh token in httpOnly cookie
// Access token in memory or localStorage
app.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  // Validate refresh token
  const newAccessToken = generateAccessToken(user);
  res.json({ accessToken: newAccessToken });
});
\`\`\`

## When to Use What?

### Use Sessions When:
- Building traditional web apps
- Need instant revocation
- Working with sensitive data
- Server-side rendering

### Use JWT When:
- Building APIs
- Mobile applications
- Microservices architecture
- Cross-domain authentication

## Best Practices

1. **Always use HTTPS**
2. **Implement rate limiting**
3. **Use secure password hashing (bcrypt)**
4. **Implement MFA when possible**
5. **Regular security audits**
6. **Follow OWASP guidelines**

## Conclusion

Both JWT and session-based authentication have their place. Choose based on your application architecture, scalability needs, and security requirements. Consider hybrid approaches for the best of both worlds.`,
    author: 'Jessica Liu',
    date: '2024-03-03',
    category: 'Security',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}