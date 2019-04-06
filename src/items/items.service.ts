import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "343434345",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "444434345",
            name: "Item Two",
            qty: 200,
            description: "This is item two"
        },
        {
            id: "343434345",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
