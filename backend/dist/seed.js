"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
function insertTestData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.partner.create({
            data: {
                name: 'Test Partner',
            },
        });
        yield prisma_1.default.event.create({
            data: {
                name: 'Test Event',
                dateStart: new Date('2024-12-01'),
                dateEnd: new Date('2024-12-02'),
                partnerId: 1,
            },
        });
    });
}
insertTestData()
    .then(() => console.log('Test data inserted'))
    .catch((error) => console.error(error))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$disconnect();
}));
