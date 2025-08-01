"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react"

interface ConditionGuideProps {
  onSelect: (condition: string) => void
  selectedCondition?: string
}

export function ConditionGuide({ onSelect, selectedCondition }: ConditionGuideProps) {
  const conditions = [
    {
      id: "excellent",
      name: "Excellent",
      multiplier: 1.0,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Like new condition",
      criteria: [
        "No visible scratches or dents",
        "Screen is perfect with no cracks",
        "All buttons and features work perfectly",
        "Battery holds charge normally",
        "No water damage",
        "Original accessories preferred but not required",
      ],
      examples: "Device looks and functions like it just came out of the box",
    },
    {
      id: "good",
      name: "Good",
      multiplier: 0.85,
      icon: CheckCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Minor wear, fully functional",
      criteria: [
        "Light scratches on back or sides (not screen)",
        "Screen is crack-free and fully functional",
        "All buttons and features work properly",
        "Battery life is good",
        "No water damage",
        "Minor scuffs on corners acceptable",
      ],
      examples: "Normal wear from daily use, but everything works perfectly",
    },
    {
      id: "fair",
      name: "Fair",
      multiplier: 0.65,
      icon: AlertCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      description: "Visible wear, works well",
      criteria: [
        "Noticeable scratches or scuffs",
        "Screen may have minor scratches (no cracks)",
        "All essential functions work",
        "Battery may drain faster than normal",
        "No major damage or water damage",
        "Some cosmetic wear is visible",
      ],
      examples: "Shows signs of regular use but still fully functional",
    },
    {
      id: "poor",
      name: "Poor",
      multiplier: 0.4,
      icon: XCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "Heavy wear or damage",
      criteria: [
        "Heavy scratches, dents, or scuffs",
        "Screen may have cracks (but still functional)",
        "Some features may not work properly",
        "Battery life significantly reduced",
        "Possible water damage (if still functional)",
        "Significant cosmetic damage",
      ],
      examples: "Device works but has obvious damage or wear",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Info className="h-5 w-5 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-600">Condition Guide</span>
        </div>
        <p className="text-sm text-gray-600">
          Be honest about your device's condition. Our inspection team will verify the condition upon receipt.
        </p>
      </div>

      {conditions.map((condition) => {
        const IconComponent = condition.icon
        const isSelected = selectedCondition === condition.id

        return (
          <Card
            key={condition.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
              isSelected
                ? `${condition.borderColor} border-2 ${condition.bgColor}`
                : "border-gray-200 hover:border-green-300"
            }`}
            onClick={() => onSelect(condition.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${condition.bgColor} rounded-full flex items-center justify-center`}>
                    <IconComponent className={`h-5 w-5 ${condition.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{condition.name}</h4>
                    <p className="text-sm text-gray-600">{condition.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={`${condition.bgColor} ${condition.color} border-0`}>
                  {Math.round(condition.multiplier * 100)}% of base price
                </Badge>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {condition.criteria.map((criterion, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-3 ${condition.bgColor} rounded-lg border ${condition.borderColor}`}>
                <p className="text-sm font-medium text-gray-700 mb-1">Example:</p>
                <p className="text-sm text-gray-600">{condition.examples}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}

      <div className="bg-gray-50 rounded-lg p-4 mt-6">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-700 mb-1">Important Notes:</p>
            <ul className="space-y-1">
              <li>• Final payout depends on actual device condition upon inspection</li>
              <li>• If condition is better than described, you get the higher amount</li>
              <li>• If condition is worse, we'll contact you before proceeding</li>
              <li>• Water damaged devices that don't power on are not accepted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
