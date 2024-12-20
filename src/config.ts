import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Metastate C Hub dApp",
    chainId: "galileo-4",
    createdDate: "2024-12-20T21:22:58.931Z",
    modifiedDate: "2024-12-20T21:22:58.931Z",
    id: "andromeda",
    collections: [
        {
            auction: "andr1lwf4u2pqk3sk7pv5x8tq4ergv6u3zg7e8fcs3p2363w5egezu98sq3ynwm",
            cw721: "andr14jv0wl5yf4thmxdezlqkjlepltljdcc43gqnjyujvp27ppznvaxsj4jt8f",
            name: "Metastate Hub Collection Auction",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
        {
            cw721: "andr127h2r72srkhwkgjd5wam2r79gva7mlxc30t0p7w3v2kmnmnmh79qt56fad",
            crowdfund: "andr164ft3vjxln5h598c2fj0jrl88e4jx0r026v3m6slarhjw6lvqyuqxhv5y5",
            name: "Rent Luxury in Meta City House!",
            type: ICollectionType.CROWDFUND,
            id: "embeddables-crowdfund-1"
        }
    ],
};

export default CONFIG;
