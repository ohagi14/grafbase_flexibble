import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Flexibble",
	description: "練習",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
