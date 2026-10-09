type Asset = { url: string };
const assets = import.meta.glob<Asset>("../assets/*.asset.json", { eager: true, import: "default" });
export const asset = (name: string) => assets[`../assets/${name}.asset.json`]?.url ?? "";
export const collections = [
 { key: "A", name: "2 BED Classic", beds: 2, baths: 2, extra: "", range: "1,169–1,281", description: "A thoughtful beginning. Space for everything that matters." },
 { key: "B", name: "3 BED Aspire", beds: 3, baths: 2, extra: "", range: "1,516–1,648", description: "Room to grow, with light and openness at the heart." },
 { key: "C", name: "3 BED Premia", beds: 3, baths: 3, extra: "", range: "1,837–2,162", description: "Considered proportions. A private retreat for everyone." },
 { key: "D", name: "3 BED Ultima", beds: 3, baths: 3, extra: "Study", range: "2,462", description: "An extra dimension for work, reflection, and possibility." },
 { key: "E", name: "4 BED Supreme", beds: 4, baths: 4, extra: "", range: "2,723–2,728", description: "Generous family living, beautifully brought together." },
 { key: "F", name: "4 BED Ultima", beds: 4, baths: 4, extra: "Staff room", range: "2,900–3,013", description: "An expansive expression of elevated living." },
];
export const plans = [
 { id: "A1", category: "A", area: 1169, facing: "East", image: asset("plan-A1.jpg"), preview: asset("preview-A1.jpg"), page: 98 },
 { id: "A2", category: "A", area: 1176, facing: "West", image: asset("plan-A2.jpg"), preview: asset("preview-A2.jpg"), page: 97 },
 { id: "A3", category: "A", area: 1278, facing: "West", image: asset("plan-A3.jpg"), preview: asset("preview-A3.jpg"), page: 96 },
 { id: "A4", category: "A", area: 1281, facing: "East", image: asset("plan-A4.jpg"), preview: asset("preview-A4.jpg"), page: 95 },
 { id: "B1", category: "B", area: 1516, facing: "North", image: asset("plan-B1.jpg"), preview: asset("preview-B1.jpg"), page: 94 },
 { id: "B2", category: "B", area: 1519, facing: "West", image: asset("plan-B2.jpg"), preview: asset("preview-B2.jpg"), page: 93 },
 { id: "B3", category: "B", area: 1519, facing: "East", image: asset("plan-B3.jpg"), preview: asset("preview-B3.jpg"), page: 92 },
 { id: "B4", category: "B", area: 1644, facing: "East", image: asset("plan-B4.jpg"), preview: asset("preview-B4.jpg"), page: 91 },
 { id: "B5", category: "B", area: 1646, facing: "West", image: asset("plan-B5.jpg"), preview: asset("preview-B5.jpg"), page: 90 },
 { id: "B6", category: "B", area: 1648, facing: "East", image: asset("plan-B6.jpg"), preview: asset("preview-B6.jpg"), page: 89 },
 { id: "B7", category: "B", area: 1648, facing: "West", image: asset("plan-B7.jpg"), preview: asset("preview-B7.jpg"), page: 88 },
 { id: "C1", category: "C", area: 1837, facing: "North", image: asset("plan-C1.jpg"), preview: asset("preview-C1.jpg"), page: 87 },
 { id: "C2", category: "C", area: 1840, facing: "East", image: asset("plan-C2.jpg"), preview: asset("preview-C2.jpg"), page: 86 },
 { id: "C3", category: "C", area: 1839, facing: "West", image: asset("plan-C3.jpg"), preview: asset("preview-C3.jpg"), page: 85 },
 { id: "C4", category: "C", area: 2004, facing: "West", image: asset("plan-C4.jpg"), preview: asset("preview-C4.jpg"), page: 84 },
 { id: "C5", category: "C", area: 2005, facing: "East", image: asset("plan-C5.jpg"), preview: asset("preview-C5.jpg"), page: 83 },
 { id: "C6", category: "C", area: 2002, facing: "East", image: asset("plan-C6.jpg"), preview: asset("preview-C6.jpg"), page: 82 },
 { id: "C7", category: "C", area: 2009, facing: "East", image: asset("plan-C7.jpg"), preview: asset("preview-C7.jpg"), page: 81 },
 { id: "C8", category: "C", area: 2148, facing: "West", image: asset("plan-C8.jpg"), preview: asset("preview-C8.jpg"), page: 80 },
 { id: "C9", category: "C", area: 2157, facing: "East", image: asset("plan-C9.jpg"), preview: asset("preview-C9.jpg"), page: 79 },
 { id: "C10", category: "C", area: 2162, facing: "West", image: asset("plan-C10.jpg"), preview: asset("preview-C10.jpg"), page: 78 },
 { id: "D1", category: "D", area: 2462, facing: "East", image: asset("plan-D1.jpg"), preview: asset("preview-D1.jpg"), page: 77 },
 { id: "D2", category: "D", area: 2462, facing: "West", image: asset("plan-D2.jpg"), preview: asset("preview-D2.jpg"), page: 76 },
 { id: "E1", category: "E", area: 2728, facing: "East", image: asset("plan-E1.jpg"), preview: asset("preview-E1.jpg"), page: 75 },
 { id: "E2", category: "E", area: 2723, facing: "West", image: asset("plan-E2.jpg"), preview: asset("preview-E2.jpg"), page: 74 },
 { id: "F1", category: "F", area: 2900, facing: "East", image: asset("plan-F1.jpg"), preview: asset("preview-F1.jpg"), page: 73 },
 { id: "F2", category: "F", area: 3013, facing: "West", image: asset("plan-F2.jpg"), preview: asset("preview-F2.jpg"), page: 72 },
];
export const specifications = [
 ["Structure & common spaces", "RCC structure in shear wall technology. Elegant ground-floor lobby flooring; vitrified tiles in basement and upper-floor lobbies. Stone lift cladding as per architect’s design. Lifts of suitable size and capacity in all towers."],
 ["Flooring", "Vitrified tiles in foyer, living, dining, corridors, all bedrooms, kitchen and utility. Ceramic tiles in balconies."],
 ["Kitchen", "Ceramic tile dado above the designated counter length. RO/IG points as stated in the brochure."],
 ["Bathrooms", "Ceramic floor tiles and dado up to the false ceiling; countertop wash basins, EWCs and chrome-plated fittings with shower mixer. Concealed suspended pipelines and exhaust-fan provisions. Geysers except the last two floors; instant geysers in maid’s toilets. Last two floors: solar-heated water with master-toilet geyser provision."],
 ["Doors & windows", "Timber main-door frame with laminated flush shutter. Wooden internal-door frames and laminated flush shutters. UPVC external doors/sliding shutters as required; UPVC-framed windows with clear glass."],
 ["Electrical provisions", "Concealed PVC-insulated copper wiring with modular switches. Power outlets and light points; TV points in living and all bedrooms. Telephone points in living and kitchen; data points in living and study/master bedroom. ELCB and individual apartment meters."],
 ["Security & backup power", "Security cabins at all entrances and exits with CCTV coverage. Generators of suitable capacity for common areas and apartments. Backup load and operating terms should be confirmed with the developer."],
];
export const brochures = ["01-20", "21-50", "51-85", "86-102"].map(range => ({ range, url: asset(`Prestige_Golden_Grove_Pages_${range}.pdf`) }));
