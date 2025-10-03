#!/bin/bash

# StutterBank Website - Run Script
# This script sets up and runs the website from scratch

set -e  # Exit on error


# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v18 or higher) first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✓ Dependencies installed successfully"
    echo ""
else
    echo "✓ Dependencies already installed"
    echo ""
fi

# Clean up any previous build artifacts
if [ -d ".next" ]; then
    echo "🧹 Cleaning previous build artifacts..."
    rm -rf .next
    echo "✓ Cleanup complete"
    echo ""
fi


# Start the development server
npm run dev

