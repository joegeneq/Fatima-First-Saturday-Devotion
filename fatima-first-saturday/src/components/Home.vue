<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fatima First Saturday Devotion</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-900">
    <!-- Navbar -->
    <nav class="bg-blue-900 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <button id="menu-toggle" class="md:hidden text-white">
                ☰
            </button>
            <ul id="menu" class="hidden md:flex space-x-6 w-full justify-center">
                <li><a href="#" class="hover:text-gray-300">Fatima</a></li>
                <li><a href="#" class="hover:text-gray-300">First Saturday Devotion</a></li>
                <li><a href="#" class="hover:text-gray-300">Marian Consecration</a></li>
                <li><a href="#" class="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" class="hover:text-gray-300">About Us</a></li>
                <li><a href="#" class="hover:text-gray-300">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="text-center py-12 bg-blue-900 text-white">
        <h2 class="text-4xl font-bold">Put your family under the special protection of the Blessed Virgin Mary</h2>
        <p class="mt-4 text-lg">Register your names.</p>
        <div class="mt-4">
            <a href="#" class="text-gray-200 underline">Parish Registration Forms</a> |
            <a href="#" class="text-gray-200 underline">For Parish Encoding Team</a> |
            <a href="#" class="text-gray-200 underline">For Parish Campaign Team</a>
        </div>
    </section>

    <!-- Image Section -->
    <div class="container mx-auto p-6 text-center">
        <img src="https://catholic-daily-reflections.com/wp-content/uploads/2019/12/Bouguereau_La_Vierge_aux_lys_1899_5593467294.jpg" class="mx-auto rounded-lg shadow-lg">
    </div>

    <!-- Content Boxes -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div class="bg-white p-6 rounded-lg shadow-md border">
            <h3 class="text-xl font-semibold">Fatima</h3>
            <p class="text-gray-700 mt-2">Start of article on Fatima... <a href="#" class="text-blue-700">(continued on page 2)</a></p>
            <a href="#" class="text-blue-700 underline">Marian Apparitions</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md border">
            <h3 class="text-xl font-semibold">First Saturday Devotion</h3>
            <p class="text-gray-700 mt-2">Start of article on First Saturday Devotion... <a href="#" class="text-blue-700">(continued on page 2)</a></p>
            <a href="#" class="text-blue-700 underline">Fatima Messages</a>
        </div>
    </div>

    <!-- Form Section -->
    <section class="container mx-auto bg-white p-6 rounded-lg shadow-md border text-center">
        <h2 class="text-2xl font-semibold">Family Name Collection</h2>
        <form class="mt-4 space-y-4">
            <div>
                <label for="zone" class="block text-lg font-medium">Select Zone:</label>
                <select id="zone" name="zone" class="border p-2 w-full">
                    <option>Metro Manila</option>
                    <option>Luzon outside Metro Manila</option>
                    <option>Cebu</option>
                    <option>Visayas outside Cebu</option>
                    <option>Davao City</option>
                    <option>Mindanao outside Davao City</option>
                </select>
            </div>
            <div>
                <label for="archdiocese" class="block text-lg font-medium">Select Archdiocese/Diocese:</label>
                <select id="archdiocese" name="archdiocese" class="border p-2 w-full">
                    <option>Sample Archdiocese 1</option>
                    <option>Sample Archdiocese 2</option>
                </select>
            </div>
            <div>
                <label for="parish" class="block text-lg font-medium">Select Parish:</label>
                <select id="parish" name="parish" class="border p-2 w-full">
                    <option>Sample Parish 1</option>
                    <option>Sample Parish 2</option>
                </select>
            </div>
            <div>
                <label for="family" class="block text-lg font-medium">Enter Names of Family Members:</label>
                <textarea id="family" name="family" rows="4" class="border p-2 w-full"></textarea>
            </div>
            <button type="submit" class="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Submit</button>
        </form>
    </section>

    <!-- Footer -->
    <footer class="text-center bg-blue-900 text-white py-6 mt-6">
        <div class="space-x-4">
            <a href="#" class="hover:text-gray-300">Consecration Text</a>
            <a href="#" class="hover:text-gray-300">Announcements</a>
            <a href="#" class="hover:text-gray-300">Facebook</a>
            <a href="#" class="hover:text-gray-300">Instagram</a>
            <a href="#" class="hover:text-gray-300">Gallery</a>
            <a href="#" class="hover:text-gray-300">Videos</a>
        </div>
    </footer>

    <script>
        document.getElementById("menu-toggle").addEventListener("click", function() {
            var menu = document.getElementById("menu");
            menu.classList.toggle("hidden");
        });
    </script>
</body>
</html>
</template>

<script>

</script>

<style></style>