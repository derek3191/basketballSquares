import GameService from '../services/gameService.ts';

describe('service tests', () =>{
    it('should return data when calling getGameInfo', async () => {
        const svc = new GameService();
        let info = await svc.getGameInfo('5764063');
        // expect(info).not.toBeNull();
        console.log(info);
    })
    it('should return data when calling ping', async () => {
        const svc = new GameService();
        let info =  svc.ping();
        console.log(info);
    })
})