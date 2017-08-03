import { Component, Output, EventEmitter } from '@angular/core';
import { Game } from './models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onGameCreated(event)
  {
    this.games.push(event.game);
  }
  games: Game[] =[
    {
      'id': 1,
      'name': 'Sonic',
      'description': 'Sonic the Hedgehog is a platform video game developed by Sonic Team and published by Sega for the Sega Genesis console. The game was first released in North America in June 1991, and in PAL regions and Japan the following month. The game features an anthropomorphic hedgehog named Sonic in a quest to defeat Dr. Eggman, a scientist who has imprisoned animals in robots and stolen the magical Chaos Emeralds. Sonic the Hedgehog\'s gameplay involves collecting rings as a form of health and a simple control scheme, with jumping and attacking controlled by a single button.',
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
      'images': ['https://upload.wikimedia.org/wikipedia/en/d/d3/MD_Sonic_the_Hedgehog.png', 'https://upload.wikimedia.org/wikipedia/en/f/f9/Sonic_1_8-bit.png', 'https://r.mprd.se/media/images/39154-Sonic_the_Hedgehog_(USA,_Europe)-2.png']
    },
    {
      'id': 2,
      'name': 'Super Mario Bros 3',
      'description': 'Super Mario Bros. 3 centers on plumbers Mario and Luigi who embark on a quest to save Princess Toadstool and the rulers of seven different kingdoms from the antagonist Bowser and his children, the Koopalings. The player, as Mario or Luigi, is able to defeat enemies by stomping them or using items that bestow magical powers. Mario and Luigi are given a wider range of abilities than in previous Super Mario games, including flying or sliding down slopes. In addition, Super Mario Bros. 3 introduces numerous elements, such as new enemy characters and the use of a world map to transition between levels, that have reappeared in or have influenced subsequent Mario games.',
      'thumbnail': 'https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png',
      'images': ['http://emulator.online/nes/super-mario-bros-3/fb-preview.jpg', 'http://www.techpanorma.com/wp-content/uploads/2015/07/SMB32.jpg', 'https://www.waimg.com/199/super-mario-bros-3-2.png']
    },
    {
      'id': 3,
      'name': 'Ninja Gaiden',
      'description': 'Ninja Gaiden (NINJA 外伝) is a series of video games by Tecmo featuring the ninja Ryu Hayabusa as its protagonist. The series was originally known as Ninja Ryukenden (忍者龍剣伝 Ninja Ryūkenden, lit. "Legend of the Ninja Dragon Sword") in Japan. The word "gaiden" in the North American Ninja Gaiden title means "side-story" in Japanese, even though the Ninja Gaiden series is not a spinoff of a previous series. The original arcade version, first two NES games and Game Boy game were released as Shadow Warriors in PAL regions.',
      'thumbnail': 'http://farm2.static.flickr.com/1139/1402451651_8b2d293023_o.jpg',
      'images': ['http://gamefabrique.com/storage/screenshots/snes/ninja-gaiden-trilogy-05.png', 'http://img.gamefaqs.net/screens/7/f/e/gfs_47135_2_3.jpg', 'http://www.retroplayers.com.br/wp-content/uploads/ninja.jpg']
    },
  ];
}
