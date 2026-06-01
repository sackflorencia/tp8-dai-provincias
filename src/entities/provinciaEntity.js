export default class Province {
    id;
    name;
    full_name;
    latitude;
    longitude;
    display_order;

    constructor(
        id = 0,
        name = "",
        full_name = "",
        latitude = 0,
        longitude = 0,
        display_order = 0
    ) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.display_order = display_order;
    }
}