class Ship {
    constructor(id, shipName, hitPoints, damagePerHit) {
        this.id = id;
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
    }

        takeDamage() {
            this.hitpoints = this.hitPoints - damagePerHit;
        }

        die() {

        }
}

class AttackShip extends Ship {
    constructor(id) {
        super(id, shipName, hitPoints, damagePerHit);
        this.id = id;
        this. shipName = "Attack Ship"
        this.hitPoints = 45;
        this.damagePerHit = 12;
    }
}

class DefenceShip extends Ship {
    constructor(id) {
    super(id, shipName, hitPoints, damagePerHit);
    this.id = id;
    this. shipName = "Defence Ship"
    this.hitPoints = 80;
    this.damagePerHit = 10;
    }
}

class MotherShip extends Ship {
    constructor(id) {
        super(id, shipName, hitPoints, damagePerHit);
        this.id = id;
        this. shipName = "Mother Ship"
        this.hitPoints = 100;
        this.damagePerHit = 9;
        }
    
        everythingDiesOnDeath() {

        }
}