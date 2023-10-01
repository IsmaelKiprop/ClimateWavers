import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


# Load your climate and earthquake datasets (replace 'climate.json' and 'earthquake.json' with your actual file paths)
climate_data = pd.read_json('climate.json')  # Updated to read JSON files
earthquake_data = pd.read_json('earthquake.json')  # Updated to read JSON files

# Assuming 'disaster_type' is a column in your earthquake dataset representing the type of disaster
# This step is necessary only if you have a classification task (predicting disaster types)
label_encoder = LabelEncoder()
earthquake_data['encoded_disaster_type'] = label_encoder.fit_transform(earthquake_data['disaster_type'])

# Merge datasets on a common column (e.g., 'location_id') if they share a common identifier
merged_data = pd.merge(climate_data, earthquake_data, on='location_id', how='inner')

# Select features and labels
features = merged_data[['temperature', 'precipitation', 'humidity', 'wind_speed', 'magnitude', 'depth']]
labels = merged_data['encoded_disaster_type']  # Assuming you're predicting disaster types


# Standardize features
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
