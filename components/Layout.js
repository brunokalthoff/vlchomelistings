import Navbar from "./Navbar";
import Footer from "./Footer";
import PrivacyTerms from "./PrivacyTerms"
import { useState } from "react";

function Layout({ children }) {
    const [privacyTerms, setPrivacyTerms] = useState(false);

    if (privacyTerms) return <PrivacyTerms privacyTerms={privacyTerms} setPrivacyTerms={setPrivacyTerms} />

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer setPrivacyTerms={setPrivacyTerms} />
        </>
    );
}

export default Layout;