# LiveDocs: Enhanced Google Docs for Millions

## 🤖 Introduction

Create a collaborative application with LiveDocs, an enhanced version of Google Docs, supporting millions of real-time collaborators.

Empower users to work together seamlessly, edit documents simultaneously, and experience unparalleled productivity and efficiency with this innovative tool designed for large-scale teamwork and collaboration.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

Cloning the Repository

```bash
git clone https://github.com/mate10106/bm_liveDocs.git
cd bm_live_docs
```

**Installation2**

Install the project dependencies using npm:

**Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:

```bash
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the **Clerk** and **Liveblocks** website.

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.
