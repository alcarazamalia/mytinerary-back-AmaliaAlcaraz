import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

let categories = [{
    name: "shomen",
    color: "FFFFFF",
    create_by: "object id del iser 1"
}, {
    name: "COMIC",
    color: "#03A9F4",
    create_by: "object id del user 2"
}
]
Category.insertMany(categories);