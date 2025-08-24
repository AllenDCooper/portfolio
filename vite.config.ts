import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(() => {
  // const base = process.env.NODE_ENV === "development" ? "/" : "/portfolio"
  const base = "/"

  return ({
    base: base,
    plugins: [react()],
  }
  )
}
)
