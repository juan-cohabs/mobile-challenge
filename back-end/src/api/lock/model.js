import eventsManager from '../../events/eventsManager';

export default class Lock {
    
    constructor({id, category, name, status, houseId}){
        this.id = id;
        this.category = category;
        this.name = name;
        this.status = status;
        this.houseId = houseId;
    }
    
    static validStatusValues = ["locked", "unlocked"];

    setStatus = async (status) => {
        let result = {
            ok: true, 
            data: { newStatus: status }
        }

        if(this.status === status) return result;

        if(!Lock.validStatusValues.includes(status)){ 
            result = {
                ok:false,
                data: { error: 'Invalid value' }
            }
            return result;
        }
 
        // Here is where we hook 'any' 3rd party library
        eventsManager.once(`change-status-completed.${this.id}`, (newStatus, err) => {
            this.status = newStatus;
            if(err !== undefined){
                result = {
                    ok: false,
                    data: err
                }
            }else{
                result = {
                    ok: true, 
                    data: {newStatus}
                }
            }
        });
        eventsManager.emit('change-status-required', this, status);

        return result;
    }
    
    isOffline = () => {
        return this.status === "offline";
    }
} 