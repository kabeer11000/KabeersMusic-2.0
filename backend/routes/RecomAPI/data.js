const data = [
	{
		input: "Shawn_Mendes  Justin_Bieber  Kabeer_Official Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Ed_Sheeran  Justin_Bieber  Justin_Bieber  Justin_Bieber  Justin_Bieber  Travis_Scott  Athioush_Ranjan  Athioush_Ranjan  Rajshri  Shawn_Mendes Ed_Sheeran  Ed_Sheeran Ed_Sheeran  Ed_Sheeran".toLowerCase(),
		output: "Ed_Sheeran".toLowerCase()
	},
	{
		input: "Justin_Bieber  Kabeer_Official  Ed_Sheeran  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Justin_Bieber  Justin_Bieber  Justin_Bieber  Athioush_Ranjan  Athioush_Ranjan  Rajshri  Ed_Sheeran  Travis_Scott  Travis_Scott   Shawn_Mendes Shawn_Mendes ".toLowerCase(),
		output: "Kabeer_Jaffri".toLowerCase()
	},
	{
		input: "Shawn_Mendes  Travis_Scott  Travis_Scott  Travis_Scott  Justin_Bieber  Kabeer_Official  Ed_Sheeran  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Justin_Bieber  Justin_Bieber  Travis_Scott  Athioush_Ranjan  Travis_Scott  Travis_Scott Travis_Scott".toLowerCase(),
		output: "Travis_Scott".toLowerCase()
	},
	{
		input: "Big_Hit_Labels  Justin_Bieber  Kabeer_Official Travis_Scott  Travis_Scott  Travis_Scott Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Justin_Bieber  Athioush_Ranjan  Shawn_Mendes  Ed_Sheeran  Travis_Scott  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels".toLowerCase(),
		output: "Travis_Scott".toLowerCase()
	},
	{
		input: "Big_Hit_Labels  Justin_Bieber  Kabeer_Official  Ed_Sheeran  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Justin_Bieber  Athioush_Ranjan  Athioush_Ranjan  Rajshri  Shawn_Mendes  Ed_Sheeran  Travis_Scott  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels".toLowerCase(),
		output: "Big_Hit_Labels".toLowerCase()
	},
	{
		input: "Kabeer_Jaffri  Kabeer_Jaffri  Kabeer_Jaffri  Ed_Sheeran  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Travis_Scott  Major_Lazer_Official  Alan Walker  Clean Bandit  Major_Lazer_Official  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Ed_Sheeran  Major_Lazer_Official  Clean Bandit  The Chainsmokers  Alan Walker  TravisScottVEVO  Ed_Sheeran  Ed_Sheeran  Justin_Bieber  Justin_Bieber  Justin_Bieber  Justin_Bieber  Travis_Scott  Athioush_Ranjan  Athioush_Ranjan  Rajshri  Shawn_Mendes  Ed_Sheeran  Travis_Scott  Travis_Scott  Ed_Sheeran  Ed_Sheeran  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels  Big_Hit_Labels Kabeer_Jaffri".toLowerCase(),
		output: "Big_Hit_Labels".toLowerCase()
	},
	{
		input: "Major_Lazer Official Major_Lazer Official Ed_Sheeran Ed_Sheeran Major_Lazer Official Major_Lazer Official Major_Lazer Official Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran 7clouds 7clouds Ed_Sheeran 7clouds Conan_Gray Major_Lazer Official Major_Lazer Official Major_Lazer Official Ed_Sheeran Ed_Sheeran 7clouds Ed_Sheeran Travis_Scott Travis_Scott Alan_Walker Love_Music Kabeer_Official Ed_Sheeran Ed_Sheeran Ed_Sheeran".toLowerCase(),
		output: "Ed_Sheeran".toLowerCase()
	},
	{
		input: "Ed_Sheeran Shawn_Mendes Justin_Bieber Kabeer_Official Ed_Sheeran Kabeer_Jaffri Kabeer_Jaffri Kabeer_Jaffri Kabeer_Jaffri Kabeer_Jaffri Ed_Sheeran Major_Lazer Official Major_Lazer Official Major_Lazer Official Major_Lazer Official Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Travis_Scott Major_Lazer Official Alan_Walker Clean_Bandit Major_Lazer Official Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Ed_Sheeran Major_Lazer Official Clean_Bandit The_Chainsmokers Alan_Walker TravisScottVEVO Ed_Sheeran Ed_Sheeran Justin_Bieber Justin_Bieber Justin_Bieber Justin_Bieber Travis_Scott Athioush_Ranjan Athioush_Ranjan Rajshri Shawn_Mendes Ed_Sheeran Travis_Scott Travis_Scott Ed_Sheeran Ed_Sheeran Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels Big_Hit Labels".toLowerCase(),
		output: "Ed_Sheeran".toLowerCase()
	}
];
module.exports = data;
