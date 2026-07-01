class Observer {

    constructor(name) {
        this.name = name;
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.name} :::PING::: ${JSON.stringify(location)}`)
    }
}

class Subject {

    constructor() {
        this.observerList = [];
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    updateObserver(location) {
        this.observerList.map((v) => v.updateStatus(location))
    }

}

//khởi tạo người đăng ký
const thresh = new Observer("Thresh");
const lucian = new Observer("Lucian");
const kayle = new Observer("Kayle");

//khởi tạo người phát hành
const teamFight = new Subject();

//thêm người đăng ký vào trong
teamFight.addObserver(thresh)
teamFight.addObserver(lucian)
teamFight.addObserver(kayle)

//cập nhật lại trạng thái
teamFight.updateObserver({ long: 123, lat: 345 });