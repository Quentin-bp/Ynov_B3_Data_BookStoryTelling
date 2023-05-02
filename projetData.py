import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as snscle


# Chargement des données à partir d'un fichier CSV
df_final = pd.read_csv(r'C:\Users\User\Downloads\projetData/df_final.csv')
df_final2 = pd.read_csv(r'C:\Users\User\Downloads\projetData/df_final2.csv')
df_final22 = pd.read_csv(r'C:\Users\User\Downloads\projetData/df_final22.csv')
merged_df = pd.read_csv(r'C:\Users\User\Downloads\projetData/merged_df.csv')
merged_df2 = pd.read_csv(r'C:\Users\User\Downloads\projetData/merged_df2.csv')
df4 = pd.read_csv(r'C:\Users\User\Downloads\projetData/df4.csv')

# Calcul de la moyenne de notes pour chaque année
mean_ratings_by_year = df4.groupby('Year')['User Rating'].mean()

# Affichage du graphique de ligne avec Matplotlib
plt.plot(mean_ratings_by_year.index, mean_ratings_by_year.values)
plt.xlabel('Année')
plt.ylabel('Moyenne des notes')
plt.title('Moyenne des notes par année')
plt.show()

# Compter le nombre de livres publiés par éditeur
books_per_publisher = df_final.groupby('Publisher')['ISBN'].count().sort_values(ascending=False)[:10]

# Tracer le graphique en barres horizontales
plt.barh(books_per_publisher.index, books_per_publisher.values)

# Définir les titres et les étiquettes des axes
plt.title('Nombre de livres publiés par éditeur')
plt.xlabel('Nombre de livres')
plt.ylabel('Éditeur')

# Afficher le graphique
plt.show()

# Compter le nombre de livres pour chaque note
ratings_count = df_final['Rating'].value_counts()

# Tracer le graphique en camembert
plt.pie(ratings_count.values, labels=ratings_count.index, autopct='%1.1f%%')

# Définir le titre
plt.title('Répartition des notes')

# Afficher le graphique
plt.show()

# Calcul de la note moyenne pour chaque éditeur
mean_rating_by_publisher = df_final.groupby('Publisher')['Rating'].mean()

# Calcul de la proportion de livres par année de publication
books_per_year = df_final.groupby('PublishYear').size()

# Création d'une figure pour agrandir le graphique
plt.figure(figsize=(8, 8))

# Création d'un graphique en secteurs pour visualiser la proportion de livres par année de publication
plt.pie(books_per_year, labels=books_per_year.index, autopct='%0.1f%%', textprops={'fontsize': 12})
plt.axis('equal')
plt.title('Proportion de livres par année de publication')

# Affichage du graphique agrandi
plt.show()

# Calcul de la proportion de livres par année de publication
books_per_year = df_final.groupby('PublishYear').size()

# Création d'une figure
plt.figure(figsize=(20, 10))

# Création d'un graphique en barres pour visualiser la proportion de livres par année de publication
sns.barplot(x=books_per_year.index, y=books_per_year.values, palette='husl')
plt.title('Proportion de livres par année de publication')
plt.xlabel('Année de publication')
plt
