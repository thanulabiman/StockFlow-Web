import AppRoutes from "./routing/AppRoutes"
import { ClerkAuthProvider } from "./providers"



function App() {
    return (
        <ClerkAuthProvider>
            <AppRoutes />
        </ClerkAuthProvider>
        
    )
}

export default App
