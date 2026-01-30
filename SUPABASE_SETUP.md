# Supabase Setup Guide

To complete the setup, you need to configure the Database URL and Authentication.

## 1. Get Database URL

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/_/settings/database).
2. Go to **Project Settings** -> **Database**.
3. Under **Connection String**, perform the following:
   * Select **Node.js** as the method.
   * Switch the "Mode" to **Transaction** (port 6543) for the main URL.
   * Copy the URL. It looks like `postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true`.
   * **Replace `[password]`** with your actual database password.

4. Also get the **Session** mode URL (port 5432) for migrations (`DIRECT_URL`).
   * It looks like `postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres`.

## 2. Update .env

Edit your `.env` file (which I created):

```env
# ... existing keys ...

# Paste your Transaction URL here
DATABASE_URL="postgres://..."

# Paste your Session URL here
DIRECT_URL="postgres://..."
```

## 3. Run Migration

Run the following command in your terminal VS Code:

```bash
npx prisma db push
```

## 4. Enable Auth Providers

1. Go to **Authentication** -> **Providers**.
2. Enable **Email**.
3. Enable **Google** (optional, requires Google Cloud Client ID).
4. Enable **GitHub** (optional, requires GitHub OAuth App).

## 5. Deployment

When deploying to Vercel, make sure to add these same Environment Variables in the Vercel Project Settings.
