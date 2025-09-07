import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class FirstAidDetailPage extends StatefulWidget {
  final String title;
  final String filePath;

  const FirstAidDetailPage({super.key, required this.title, required this.filePath});

  @override
  State<FirstAidDetailPage> createState() => _FirstAidDetailPageState();
}

class _FirstAidDetailPageState extends State<FirstAidDetailPage> {
  String fileContent = "Loading...";

  @override
  void initState() {
    super.initState();
    loadFile();
  }

  Future<void> loadFile() async {
    try {
      final content = await DefaultAssetBundle.of(context).loadString(widget.filePath);
      setState(() => fileContent = content);
    } catch (e) {
      setState(() => fileContent = "Error loading content. Check file path.");
    }
  }

  void callEmergency(String number) async {
    final Uri callUri = Uri(scheme: 'tel', path: number);
    if (await canLaunchUrl(callUri)) {
      await launchUrl(callUri);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Cannot call $number")));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Expanded(child: SingleChildScrollView(child: Text(fileContent, style: const TextStyle(fontSize: 16, height: 1.5)))),
            const SizedBox(height: 16),
            ElevatedButton.icon(
              icon: const Icon(Icons.call),
              label: const Text("Call Emergency"),
              style: ElevatedButton.styleFrom(minimumSize: const Size.fromHeight(50)),
              onPressed: () => callEmergency("108"),
            ),
          ],
        ),
      ),
    );
  }
}