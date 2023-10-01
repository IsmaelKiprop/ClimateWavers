import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


# Load your climate and earthquake datasets (replace 'climate.json' and 'earthquake.json' with your actual file paths)
climate_data = pd.read_csv('climate.csv')  # Updated to read JSON files
earthquake_data = pd.read_csv('earthquake.csv')  # Updated to read JSON files

# Assuming 'disaster_type' is a column in your earthquake dataset representing the type of disaster
# This step is necessary only if you have a classification task (predicting disaster types)
climate_data.fillna(0, inplace=True)
earthquake_data.fillna(0, inplace=True)
features = pd.concat([climate_data[['temperature', 'precipitation']], earthquake_data[['mag', 'depth']]], axis=1)
labels = earthquake_data['disaster_type']
scaler = StandardScaler()
scaled_features = scaler.fit_transform(features)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(scaled_features, labels, test_size=0.2, random_state=42)


# Train data with RandomForest
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f'Accuracy: {accuracy * 100:.2f}%')
