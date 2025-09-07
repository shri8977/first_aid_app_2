import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'first_aid_detail_page.dart';

class FirstAidListPage extends StatefulWidget {
  const FirstAidListPage({super.key});

  @override
  State<FirstAidListPage> createState() => _FirstAidListPageState();
}

class _FirstAidListPageState extends State<FirstAidListPage> {
  final TextEditingController _searchController = TextEditingController();
  String currentLanguage = 'english'; // english / tamil
  Set<String> favorites = {};
  bool showOnlyFavorites = false;

  final List<Map<String, dynamic>> emergencies = [
    {
      "title": "Bleeding",
      "icon": "🩸",
      "children": [
        {
          "title": "Head Bleeding",
          "englishAdult": "assets/text/english/adult/head_bleeding.txt",
          "englishChild": "assets/text/english/child/head_bleeding.txt",
          "tamilAdult": "assets/text/tamil/adult/head_bleeding.txt",
          "tamilChild": "assets/text/tamil/child/head_bleeding.txt",
        },
        {
          "title": "Nose Bleeding",
          "englishAdult": "assets/text/english/adult/nose_bleeding.txt",
          "englishChild": "assets/text/english/child/nose_bleeding.txt",
          "tamilAdult": "assets/text/tamil/adult/nose_bleeding.txt",
          "tamilChild": "assets/text/tamil/child/nose_bleeding.txt",
        },
        {
          "title": "Hand Bleeding",
          "englishAdult": "assets/text/english/adult/hand_bleeding.txt",
          "englishChild": "assets/text/english/child/hand_bleeding.txt",
          "tamilAdult": "assets/text/tamil/adult/hand_bleeding.txt",
          "tamilChild": "assets/text/tamil/child/hand_bleeding.txt",
        },
        {
          "title": "Leg Bleeding",
          "englishAdult": "assets/text/english/adult/leg_bleeding.txt",
          "englishChild": "assets/text/english/child/leg_bleeding.txt",
          "tamilAdult": "assets/text/tamil/adult/leg_bleeding.txt",
          "tamilChild": "assets/text/tamil/child/leg_bleeding.txt",
        },
      ],
    },
    {
      "title": "Choking",
      "icon": "🤕",
      "englishAdult": "assets/text/english/adult/choking.txt",
      "englishChild": "assets/text/english/child/choking.txt",
      "tamilAdult": "assets/text/tamil/adult/choking.txt",
      "tamilChild": "assets/text/tamil/child/choking.txt",
    },
    {
      "title": "Cardiac Arrest",
      "icon": "❤️",
      "englishAdult": "assets/text/english/adult/cardiac_arrest.txt",
      "englishChild": "assets/text/english/child/cardiac_arrest.txt",
      "tamilAdult": "assets/text/tamil/adult/cardiac_arrest.txt",
      "tamilChild": "assets/text/tamil/child/cardiac_arrest.txt",
    },
    {
      "title": "Common Warning Signs",
      "icon": "⚠️",
      "englishAdult": "assets/text/english/adult/common_warning_signs.txt",
      "englishChild": "assets/text/english/child/common_warning_signs.txt",
      "tamilAdult": "assets/text/tamil/adult/common_warning_signs.txt",
      "tamilChild": "assets/text/tamil/child/common_warning_signs.txt",
    },
  ];

  @override
  void initState() {
    super.initState();
    _loadFavorites();
  }

  Future<void> _loadFavorites() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      favorites = prefs.getStringList('favorites')?.toSet() ?? {};
    });
  }

  Future<void> _saveFavorites() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('favorites', favorites.toList());
  }

  String getFile(Map<String, dynamic> item, String category) {
    String key =
        "${currentLanguage}${category[0].toUpperCase()}${category.substring(1)}";
    return item[key] ?? "";
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: const Color(0xFFF9F6FB),
        appBar: AppBar(
          title: const Text("Offline First Aid"),
          actions: [
            IconButton(
              icon: Icon(
                showOnlyFavorites ? Icons.star : Icons.star_border,
                color: Colors.orange,
              ),
              onPressed: () {
                setState(() {
                  showOnlyFavorites = !showOnlyFavorites;
                });
              },
            ),
            PopupMenuButton<String>(
              onSelected: (value) {
                setState(() {
                  currentLanguage = value;
                });
              },
              itemBuilder: (context) => [
                const PopupMenuItem(value: 'english', child: Text('English')),
                const PopupMenuItem(value: 'tamil', child: Text('Tamil')),
              ],
              icon: const Icon(Icons.language),
            )
          ],
          bottom: const TabBar(
            tabs: [
              Tab(text: 'Adult'),
              Tab(text: 'Child'),
            ],
          ),
        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(12.0),
              child: TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  hintText: "Search emergencies...",
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  filled: true,
                  fillColor: Colors.white,
                ),
                onChanged: (_) => setState(() {}),
              ),
            ),
            Expanded(
              child: TabBarView(
                children: [
                  _buildList('adult'),
                  _buildList('child'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildList(String category) {
    return ListView.builder(
      padding: const EdgeInsets.all(12),
      itemCount: emergencies.length,
      itemBuilder: (context, index) {
        final item = emergencies[index];

        // --- Handle parent with children (Bleeding) ---
        if (item.containsKey("children")) {
          final children = List<Map<String, dynamic>>.from(item["children"]);
          return ExpansionTile(
            leading: Text(item["icon"] ?? "❗",
                style: const TextStyle(fontSize: 26)),
            title: Text(item["title"],
                style:
                const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            children: children.map((child) {
              final isFavorite = favorites.contains(child["title"]);
              final query = _searchController.text.toLowerCase();
              final matchesSearch =
              child["title"]!.toLowerCase().contains(query);
              final matchesFavorite =
                  !showOnlyFavorites || favorites.contains(child["title"]);
              if (!matchesSearch || !matchesFavorite) return Container();

              return ListTile(
                title: Text(child["title"]),
                trailing: IconButton(
                  icon: Icon(
                    isFavorite ? Icons.star : Icons.star_border,
                    color: isFavorite ? Colors.orange : Colors.grey,
                  ),
                  onPressed: () {
                    setState(() {
                      if (isFavorite) {
                        favorites.remove(child["title"]);
                      } else {
                        favorites.add(child["title"]!);
                      }
                      _saveFavorites();
                    });
                  },
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => FirstAidDetailPage(
                        title: child["title"],
                        filePath: getFile(child, category),
                      ),
                    ),
                  );
                },
              );
            }).toList(),
          );
        }

        // --- Handle normal item (Choking, Cardiac Arrest, Common Warning Signs) ---
        final isFavorite = favorites.contains(item["title"]);
        final query = _searchController.text.toLowerCase();
        final matchesSearch = item["title"]!.toLowerCase().contains(query);
        final matchesFavorite =
            !showOnlyFavorites || favorites.contains(item["title"]);
        if (!matchesSearch || !matchesFavorite) return Container();

        return Card(
          shape:
          RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
          margin: const EdgeInsets.symmetric(vertical: 8),
          child: ListTile(
            leading: Text(item["icon"] ?? "❗",
                style: const TextStyle(fontSize: 26)),
            title: Text(item["title"],
                style: const TextStyle(
                    fontSize: 18, fontWeight: FontWeight.bold)),
            trailing: IconButton(
              icon: Icon(
                isFavorite ? Icons.star : Icons.star_border,
                color: isFavorite ? Colors.orange : Colors.grey,
              ),
              onPressed: () {
                setState(() {
                  if (isFavorite) {
                    favorites.remove(item["title"]);
                  } else {
                    favorites.add(item["title"]!);
                  }
                  _saveFavorites();
                });
              },
            ),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => FirstAidDetailPage(
                    title: item["title"],
                    filePath: getFile(item, category),
                  ),
                ),
              );
            },
          ),
        );
      },
    );
  }
}
