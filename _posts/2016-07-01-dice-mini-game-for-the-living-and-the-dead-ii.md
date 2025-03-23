---
layout: post
title: Dice Mini-Game for The Living and the Dead II
summary: "Script for a global add-on for TES 4: Oblivion"
---

 I created the dice mini-game, which, with the help of [Uncle Ju](https://www.youtube.com/user/JulianosOfTamriel/videos){:target="_blank"} and a talented team from [www.tamriel.ru](http://tamriel.ru/){:target="_blank"}, became a part of the extensive add-on for The Elder Scrolls IV: Oblivion - [The Living And The Dead II](https://www.nexusmods.com/oblivion/mods/48810){:target="_blank"}.

This was my first experience of collaborating with a team on a project of such scale.

## Demo

Below, you can view a GIF image illustrating what was accomplished in the project:

![Dice mini-game](/assets/images/blog/2016-07-01-dice-mini-game-for-the-living-and-the-dead-ii/img-01.webp){:loading="lazy"}

## Scripts

### NPC Inventory Update Every 5 Days

I developed a script to update NPC inventory every 5 days. Here's the script's source code below:

```vb
scn a7DiceRefresh

begin gamemode

	if (GetDayOfWeek == 5)

		if(a7DiceNPCRef.GetItemCount a7DiceShirt == 0)
			a7DiceNPCRef.additem a7DiceShirt 1
			a7DiceNPCRef.equipitem a7DiceShirt 0	
		endif

		if(a7DiceNPCRef.GetItemCount a7DiceShoes == 0)
			a7DiceNPCRef.additem a7DiceShoes 1
			a7DiceNPCRef.equipitem a7DiceShoes 0	
		endif

		if(a7DiceNPCRef.GetItemCount Gold001 < 5)
			a7DiceNPCRef.additem Gold001 50
		endif

	endif

end
```

### Main Logic Source Code

Here is the main source code that embodies the core logic of the project:

```vb
scn a7DiceRoll

short Randomizer
short Dice1PosX
short Dice1PosY
short Dice2PosX
short Dice2PosY
short Order
short Play
short Won
short Gold
short Misc
short Action
short Dice1Val
short Dice2Val
short DiceSumPlayer
short DiceSumNPC

begin gamemode
	if(Play == 1)		
          set Dice1Val to 1 + 0.06 * GetRandompercent
		set Dice2Val to 1 + 0.06 * GetRandompercent
		
		set Randomizer to 1 + 0.02 * GetRandompercent
		if(Randomizer == 1)
			set Randomizer to -1
		endif
		if(Randomizer == 2)
			set Randomizer to 1
		endif
		set Dice1PosX to 1969.3079 + Randomizer

		set Randomizer to 1 + 0.10 * GetRandompercent
		if(Randomizer <= 5)
			set Randomizer to Randomizer - Randomizer * 2
		endif
		if(Randomizer > 5)
			set Randomizer to Randomizer / 2
		endif
		set Dice1PosY to 2214.5613 + Randomizer

		set Randomizer to 1 + 0.02 * GetRandompercent
		if(Randomizer == 1)
			set Randomizer to -1
		endif
		if(Randomizer == 2)
			set Randomizer to 1
		endif
		set Dice2PosX to 1975.3948 + Randomizer

		set Randomizer to 1 + 0.10 * GetRandompercent
		if(Randomizer <= 5)
			set Randomizer to Randomizer - Randomizer * 2
		endif
		if(Randomizer > 5)
			set Randomizer to Randomizer / 2
		endif
		set Dice2PosY to 2213.5500 + Randomizer

		a7DiceDice01Ref.setPos x, Dice1PosX
		a7DiceDice01Ref.setPos y, Dice1PosY
		a7DiceDice01Ref.setPos z, 8100.8057

		a7DiceDice02Ref.setPos x, Dice2PosX
		a7DiceDice02Ref.setPos y, Dice2PosY
		a7DiceDice02Ref.setPos z, 8100.8057

		if(Dice1Val == 1)
			a7DiceDice01Ref.setAngle x, 270
			a7DiceDice01Ref.setAngle y, 0
			a7DiceDice01Ref.setAngle z, 0
		endif

		if(Dice1Val == 2)
			a7DiceDice01Ref.setAngle x, 0
			a7DiceDice01Ref.setAngle y, 270
			a7DiceDice01Ref.setAngle z, 0
		endif

		if(Dice1Val == 3)
			a7DiceDice01Ref.setAngle x, 0
			a7DiceDice01Ref.setAngle y, 0
			a7DiceDice01Ref.setAngle z, 0
		endif

		if(Dice1Val == 4)
			a7DiceDice01Ref.setAngle x, 180
			a7DiceDice01Ref.setAngle y, 0
			a7DiceDice01Ref.setAngle z, 0
		endif

		if(Dice1Val == 5)
			a7DiceDice01Ref.setAngle x, 0
			a7DiceDice01Ref.setAngle y, 90
			a7DiceDice01Ref.setAngle z, 0
		endif

		if(Dice1Val == 6)
			a7DiceDice01Ref.setAngle x, 90
			a7DiceDice01Ref.setAngle y, 0
			a7DiceDice01Ref.setAngle z, 0
		
		endif

		if(Dice2Val == 1)
			a7DiceDice02Ref.setAngle x, 270
			a7DiceDice02Ref.setAngle y, 0
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Dice2Val == 2)
			a7DiceDice02Ref.setAngle x, 0
			a7DiceDice02Ref.setAngle y, 270
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Dice2Val == 3)
			a7DiceDice02Ref.setAngle x, 0
			a7DiceDice02Ref.setAngle y, 0
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Dice2Val == 4)
			a7DiceDice02Ref.setAngle x, 180
			a7DiceDice02Ref.setAngle y, 0
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Dice2Val == 5)
			a7DiceDice02Ref.setAngle x, 0
			a7DiceDice02Ref.setAngle y, 90
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Dice2Val == 6)
			a7DiceDice02Ref.setAngle x, 90
			a7DiceDice02Ref.setAngle y, 0
			a7DiceDice02Ref.setAngle z, 0
		endif

		if(Order == 1)
			a7DiceDice01Ref.enable
			a7DiceDice02Ref.enable
			set DiceSumNPC to Dice1Val + Dice2Val
			Message "Очки противника: %.0f" DiceSumNPC, 10
			set Play to 2
		endif
		
		if(Order == 2)
			a7DiceDice01Ref.enable
			a7DiceDice02Ref.enable
			set DiceSumPlayer to Dice1Val + Dice2Val
			Message "Мои очки: %.0f" DiceSumPlayer, 10
			set Play to 2
		endif
	endif

	if(Order > 0 && Player.GetSitting == 0)
		a7DiceNPCRef.StartConversation Player, a7DiceNotSit
		Player.RemoveItem Gold001 Gold
		a7DiceNPCRef.additem Gold001 Gold	
		set Randomizer to 0
		set Dice1PosX to 0
		set Dice1PosY to 0
		set Dice2PosX to 0
		set Dice2PosY to 0
		set Order to 0
		set Play to 0
		set Won to 0
		set Gold to 0
		set Misc to 0
		short Action = 0
		set Dice1Val to 0
		set Dice2Val to 0
		set DiceSumPlayer to 0
		set DiceSumNPC to 0
		return		
	endif

	if(DiceSumPlayer > DiceSumNPC && Order == 2 && Play == 2)
		set Won to 1
	endif
	if(DiceSumPlayer < DiceSumNPC && Order == 2 && Play == 2)
		set Won to 2
	endif
	if(DiceSumPlayer == DiceSumNPC && Order == 2 && Play == 2)
		set Won to 3
	endif

	if(Action == 1 && Order == 2)		
		if(Misc == 1)
			a7DiceNPCRef.removeitem a7DiceShoes, 1
        		Player.additem a7DiceShoes, 1
		endif
		if(Misc == 2)
     		a7DiceNPCRef.removeitem a7DiceShirt, 1
        		Player.additem a7DiceShirt, 1
		endif
		if(Misc == 0)
			Player.additem Gold001, Gold
			a7DiceNPCRef.removeitem Gold001, Gold
		endif	
		set Randomizer to 0
		set Dice1PosX to 0
		set Dice1PosY to 0
		set Dice2PosX to 0
		set Dice2PosY to 0
		set Order to 0
		set Play to 0
		set Won to 0
		set Gold to 0
		set Misc to 0
		set Action to 0
		set Dice1Val to 0
		set Dice2Val to 0
		set DiceSumPlayer to 0
		set DiceSumNPC to 0
		return
	endif

	if(Action == 2 && Order == 2)
		a7DiceNPCRef.additem Gold001, Gold
		Player.removeitem Gold001, Gold
		set Randomizer to 0
		set Dice1PosX to 0
		set Dice1PosY to 0
		set Dice2PosX to 0
		set Dice2PosY to 0
		set Order to 0
		set Play to 0
		set Won to 0
		set Gold to 0
		set Misc to 0
		set Action to 0
		set Dice1Val to 0
		set Dice2Val to 0
		set DiceSumPlayer to 0
		set DiceSumNPC to 0
		return
	endif

	if(Action == 3 && Order == 2)
		set Randomizer to 0
		set Dice1PosX to 0
		set Dice1PosY to 0
		set Dice2PosX to 0
		set Dice2PosY to 0
		set Order to 0
		set Play to 0
		set Won to 0
		set Gold to 0
		set Misc to 0
		set Action to 0
		set Dice1Val to 0
		set Dice2Val to 0
		set DiceSumPlayer to 0
		set DiceSumNPC to 0
		return
	endif
end
```
